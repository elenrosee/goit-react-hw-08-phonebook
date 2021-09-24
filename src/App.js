import { Switch } from 'react-router';
import AppBar from './components/AppBar';
import Container from './components/Container';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperations from './redux/Auth/auth-operations';
import { lazy, Suspense } from 'react';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Suspense fallback={<h3>"Loading..."</h3>}>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute restricted redirectTo="/contacts" path="/login">
            <LoginView />
          </PublicRoute>
          <PublicRoute restricted redirectTo="/contacts" path="/register">
            <RegisterView />
          </PublicRoute>

          <PrivateRoute redirectTo="/register" path="/contacts">
            <ContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </Container>
  );
}
