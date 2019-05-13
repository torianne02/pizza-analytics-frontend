import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PizzasContainer from './containers/PizzasContainer';
import PeopleContainer from './containers/PeopleContainer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={PizzasContainer} />
          <Route exact path='/people' component={PeopleContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
