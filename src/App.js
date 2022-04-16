import './App.css';
import { CreatePlaylist } from './pages/create-playlist';
import { Homepage } from './pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/create-playlist">
            <CreatePlaylist />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
