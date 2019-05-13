import React, { Component } from 'react';
import SearchForm from '../components/people/SearchForm';

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
    // const api_call = await fetch(`http://127.0.0.1:9393/api/v1/people?name=${name}`)
    // const response = await api_call.json();
    // console.log(response)
    // this.setState({
    //   name: response.name,
    //   // pizzas: response.pizzas NEED TO FIGURE THIS OUT
    //   submitted: false,
    // })
  }

  render() {
    return (
      <div className="name-search">
        <SearchForm
          nameValue={this.state.name}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
      </div>
    )
  }
}

export default PeopleContainer
