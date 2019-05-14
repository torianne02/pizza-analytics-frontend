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
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    const requestInfo = {
      method: 'GET',
    }

    // calls API for ALL pizzas
    fetch(`http://127.0.0.1:9393/api/v1/pizzas`, requestInfo)
    .then(response => response.json().then(json => {
      this.setState({
        pizzas: json,
        toppings: json.map((pizza) => {
          return pizza.topping
        })
      })
    }))

    // calls API for monthly sales
    fetch(`http://127.0.0.1:9393/api/v1/pizzas/monthly-sales`, requestInfo)
    .then(response => response.json().then(json => {
      this.setState({
        monthlySales: json,
      })
    }))

    // calls API for streaks
    fetch(`http://127.0.0.1:9393/api/v1/pizzas/streaks`, requestInfo)
    .then(response => response.json().then(json => {
      this.setState({
        streaks: json,
      })
    }))
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

  // function for form submission API call
  getPizzas = async () => {
    const topping = this.state.topping
    const requestInfo = {
      method: 'GET',
    }

    // calls API for all pizzas of a topping
    fetch(`http://127.0.0.1:9393/api/v1/pizzas?topping=${topping}`, requestInfo)
    .then(response => response.json().then(json => {
      this.setState({
        pizzas: json,
        submitted: false,
      })
    }))
  }

  render() {
    return (
      <div className="pizzas">
        <div className="topping-search">
          <ToppingSearch
            toppings={this.state.toppings}
            handleOnChange={this.handleOnChange}
            handleOnSubmit={this.handleOnSubmit}
          />
        </div>
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
      </div>
    )
  }
}

export default PizzasContainer
