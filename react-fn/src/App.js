import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './routes/Home';
import Detail from './routes/Detail';

import './App.css';

const apiUrl = 'https://api.thedogapi.com/v1/images/';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Dog Api</h1>
      </header>
      <Router>
        <Switch>
          <Route path="/dog/:dogId">
            <Detail apiUrl={apiUrl} />
          </Route>
          <Route path="/">
            <Home apiUrl={`${apiUrl}search?limit=20`} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
