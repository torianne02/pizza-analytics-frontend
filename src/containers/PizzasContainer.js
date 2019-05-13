import React, { Component } from 'react';
import Pizzas from '../components/pizzas/Pizzas';
import MonthlyHigh from '../components/pizzas/MonthlyHigh';
import Streaks from '../components/pizzas/streaks/Streaks';
import ToppingSearch from '../components/pizzas/ToppingSearch';

class PizzasContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [],
      monthlySales: [],
      streaks: [],
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
    .then(response => console.log(response))
    .then(function(response) {
      this.setState({
        pizzas: response,
      })
    })

    fetch(`http://127.0.0.1:9393/api/v1/pizzas/monthly-sales`, requestInfo)
    .then(response => console.log(response))
    .then(function(response) {
      this.setState({
        monthlySales: response,
      })
    })

    fetch(`http://127.0.0.1:9393/api/v1/pizzas/streaks`, requestInfo)
    .then(response => console.log(response))
    .then(function(response) {
      this.setState({
        streaks: response,
      })
    })

    fetch(`http://127.0.0.1:9393/api/v1/pizzas`, requestInfo)
    .then(response => console.log(response))
    .then(function(response) {
      this.setState({
        // toppings: response.each {|pizza| pizza.topping}
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
    .then(response => console.log(response))
    .then(function(response) {
      this.setState({
        pizzas: response,
        submitted: false,
      })
    })
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
      <div className="pizzas">
        <div className="pizzas-info">
          <Pizzas
            pizzas={this.state.pizzas}
          />
        </div>
        <div className="streaks-info">
          <Streaks
            streaks={this.state.streaks}
          />
        </div>
        <div className="monthly-sales-info">
          <MonthlyHigh
            monthlySales={this.state.monthlySales}
          />
        </div>
        <div className="dropdown">
          <ToppingSearch
            toppings={this.state.toppings}
            handleOnChange={this.handleOnChange}
            handleOnSubmit={this.handleOnSubmit}
          />
          { this.state.submitted && this.renderPizza() }          
        </div>
      </div>
    )
  }
}

export default PizzasContainer
