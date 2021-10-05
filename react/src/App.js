import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Home from './routes/Home';
import Detail from './routes/Detail';

const apiUrl = 'https://api.thedogapi.com/v1/images/search?limit=20';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {dogs: []};
  }
  
  componentDidMount() {
    this.fetchDogs();
  }

  async fetchDogs() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => this.setState({ dogs: data }));
  }

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
            <Home apiUrl={apiUrl} />
          </Route>
        </Switch>
      </Router>
    </div>)
  }
}

export default App;
