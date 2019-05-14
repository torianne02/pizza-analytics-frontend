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

  // function called after form submission
  getPerson = async () => {
    const name = this.state.name
    const requestInfo = {
      method: 'GET',
    }

    // calls API for ONE person
    fetch(`http://127.0.0.1:9393/api/v1/people?name=${name}`, requestInfo)
    .then(response => response.json().then(json => {
      this.setState({
        name: json[0].name,
        pizzas: json[1],
        submitted: false,
      })
    }))
  }

  render() {
    return (
      <div className="name-search">
        <SearchForm
          nameValue={this.state.name}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
        <Person
          name={this.state.name}
          pizzas={this.state.pizzas}
        />
      </div>
    )
  }
}

export default NameSearchContainer
