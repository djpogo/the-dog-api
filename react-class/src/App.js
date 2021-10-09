import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Home from './routes/Home';
import Detail from './routes/Detail';

class App extends Component {
  render() {
    return (<div className="App">
      <header className="App-header">
        <h1>The Dog Api</h1>
      </header>
      <Router>
        <Switch>
          <Route path="/dog/:dogId">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>)
  }
}

export default App;
