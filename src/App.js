import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PeopleContainer from './containers/PeopleContainer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={PeopleContainer} />
      </div>
    </Router>
  );
}

export default App;
