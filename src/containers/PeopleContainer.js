import React, { Component } from 'react';
import SearchForm from '../components/people/SearchForm';
import Person from '../components/people/Person';
import People from '../components/people/People';

class PeopleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pizzas: [],
      people: [],
      submitted: false,
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    const requestInfo = {
      method: 'GET',
    }

    fetch(`http://127.0.0.1:9393/api/v1/people`, requestInfo)
    .then(response => console.log(response))
    .then(function(response) {
      this.setState({
        name: response.name,
        pizzas: response[1],
        submitted: false,
      })
    })
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();

    if (this.state.name) {
      this.getPerson();
      this.setState({
        name: '',
        pizzas: [],
        submitted: true,
      })
    } else {
      return alert('Oops! Please enter a name!')
    }
  }

  getPerson = async () => {
    const name = this.state.name
    const requestInfo = {
      method: 'GET',
    }

    fetch(`http://127.0.0.1:9393/api/v1/people?name=${name}`, requestInfo)
    .then(response => console.log(response))
    .then(function(response) {
      this.setState({
        name: response.name,
        pizzas: response[1],
        submitted: false,
      })
    })
  }

  renderPerson() {
    return (
      <Person
        name={this.state.name}
        pizzas={this.state.pizzas}
      />
    )
  }

  render() {
    return (
      <div className="people">
        <div className="name-search">
          <SearchForm
            nameValue={this.state.name}
            handleOnChange={this.handleOnChange}
            handleOnSubmit={this.handleOnSubmit}
          />
          { this.state.submitted && this.renderPerson() }
        </div>
        <div className="people-info">
          <People
            people={this.state.people}
          />
        </div>
      </div>
    )
  }
}

export default PeopleContainer
