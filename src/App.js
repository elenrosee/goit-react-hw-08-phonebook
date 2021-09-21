import { Route, Switch } from 'react-router';
import AppBar from './components/AppBar';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import Container from './components/Container';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView}></Route>
        <Route exact path="/login" component={LoginView}></Route>
        <Route exact path="/register" component={RegisterView}></Route>
        <Route exact path="/contacts" component={ContactsView}></Route>
      </Switch>
    </Container>
  );
}
