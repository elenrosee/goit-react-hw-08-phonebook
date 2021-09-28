import { Switch } from 'react-router';
import AppBar from './components/AppBar';
import Container from './components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authOperations from './redux/Auth/auth-operations';
import { lazy, Suspense } from 'react';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import authSelectors from './redux/Auth/auth-selectors';
import { Fragment } from 'react';

const HomeView = lazy(() => import('./views/HomeView'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h2>loading...</h2>
      ) : (
        <Fragment>
          <AppBar />

          <Switch>
            <Suspense fallback={<h3>Loading...</h3>}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                restricted
                redirectTo="/contacts"
              >
                <LoginView />
              </PublicRoute>
              <PublicRoute
                exact
                path="/register"
                restricted
                redirectTo="/contacts"
              >
                <RegisterView />
              </PublicRoute>

              <PrivateRoute path="/contacts" redirectTo="/register">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </Fragment>
      )}
    </Container>
  );
}
