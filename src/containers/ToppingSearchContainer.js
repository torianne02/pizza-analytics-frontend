import React, { Component } from 'react';
import ToppingSearch from '../components/pizzas/ToppingSearch';
import Pizzas from '../components/pizzas/Pizzas'

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

  componentDidMount() {
    const requestInfo = {
      method: 'GET',
    }

    fetch(`http://127.0.0.1:9393/api/v1/pizzas`, requestInfo)
    .then(response => response.json().then(json => {
      this.setState({
        pizzas: json,
        toppings: this.state.pizzas.map((pizza) => {
          return pizza.topping
        })
      })
    }))

    // need to fill toppings before renders occur 
    // const toppingArr = []
    // this.state.pizzas.map((pizza) => {
    //   toppingArr.push(pizza.topping)
    // })
    // this.setState({
    //   toppings: toppingArr
    // })
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
    const topping = this.state.topping
    const requestInfo = {
      method: 'GET',
    }

    fetch(`http://127.0.0.1:9393/api/v1/pizzas?topping=${topping}`, requestInfo)
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
