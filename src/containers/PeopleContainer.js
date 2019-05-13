import React, { Component } from 'react';
import SearchForm from '../components/people/SearchForm';
import Person from '../components/people/Person';

class PeopleContainer extends Component {
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

    fetch(`http://127.0.0.1:9393/api/v1/people?name=${name}`,
      {
        mode: 'no-cors',
        method: 'GET',
      })
      .then((response) => response.json())
      .then((data) => console.log(data))
    // this.setState({
    //   name: response.name,
    //   pizzas: response[1]
    //   submitted: false,
    // })
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
        </div>
        <div className="person-info">
          <Person
            name={this.state.name}
            pizzas={this.state.pizzas}
          />
        </div>
      </div>
    )
  }
}

export default PeopleContainer
