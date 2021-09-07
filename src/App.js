import { Switch } from 'react-router';
import './App.css';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import NoMatch from './pages/NoMatch';
import Rockets from './pages/Rockets';

function App() {
  return (
    <div className="App">
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
