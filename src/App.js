import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import NoMatch from './pages/NoMatch';
import Rockets from './pages/Rockets';
import Navbar from './components/Navbar';
import NavbarSeparator from './components/NavbarSeparator';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarSeparator />
      <Switch>
        <Route exact path="/">
          <Rockets />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
