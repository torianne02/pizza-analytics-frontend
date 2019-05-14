import React, { Component } from 'react';
import SearchForm from '../components/people/SearchForm';
import Person from '../components/people/Person';

class NameSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pizzas: [],
      submitted: false,
    }
    this.handleOnChange = this.handleOnChange.bind(this);
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
    .then(response => response.json().then(json => {
      console.log(json)
      this.setState({
        name: json.name,
        pizzas: json[1],
        submitted: false,
      })
    }))
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
      <div className="name-search">
        <SearchForm
          nameValue={this.state.name}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
        { this.state.submitted && this.renderPerson() }
      </div>
    )
  }
}

export default NameSearchContainer
