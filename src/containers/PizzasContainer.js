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

    fetch(`http://127.0.0.1:9393/api/v1/pizzas`, requestInfo)
    .then(response => response.json().then(json => {
      this.setState({
        pizzas: json,
        toppings: json.map((pizza) => {
          return pizza.topping
        })
      })
    }))

    fetch(`http://127.0.0.1:9393/api/v1/pizzas/monthly-sales`, requestInfo)
    .then(response => response.json().then(json => {
      this.setState({
        monthlySales: json,
      })
    }))

    fetch(`http://127.0.0.1:9393/api/v1/pizzas/streaks`, requestInfo)
    .then(response => response.json().then(json => {
      this.setState({
        streaks: json,
      })
    }))

    console.log(this.state.streaks)
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
