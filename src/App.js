import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PizzasContainer from './containers/PizzasContainer';
import PeopleContainer from './containers/PeopleContainer';
import NameSearchContainer from './containers/NameSearchContainer';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={PizzasContainer} />
          <Route exact path='/people' component={PeopleContainer} />
          <Route exact path='/name-search' component={NameSearchContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
