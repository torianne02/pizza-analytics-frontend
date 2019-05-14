import React, { Component } from 'react';
import ToppingSearch from '../components/pizzas/ToppingSearch';

class ToppingSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [],
      toppings: [],
      topping: "",
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

    if (this.state.topping) {
      this.getPizzas();
      this.setState({
        topping: '',
        pizzas: [],
        submitted: true,
      })
    } else {
      return alert('Oops! Please select a topping!')
    }
  }

  getPizzas = async () => {
    const requestInfo = {
      method: 'GET',
    }

    fetch(`http://127.0.0.1:9393/api/v1/pizzas`, requestInfo)
    .then(response => response.json().then(json => {
      this.setState({
        pizzas: json,
        submitted: false,
      })
    }))
  }

  renderPizza() {
    return (
      <Pizzas
        pizzas={this.state.pizzas}
      />
    )
  }

  render() {
    return (
      <div className="topping-search">
        <ToppingSearch
          toppings={this.state.toppings}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
        { this.state.submitted && this.renderPizza() }
      </div>
    )
  }
}

export default ToppingSearchContainer
