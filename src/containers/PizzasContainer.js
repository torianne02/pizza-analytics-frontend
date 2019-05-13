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
    }
  }

  getPizzas = async () => {
    // fetch request for /pizzas
  }

  getMonthlySales = async () => {
    // fetch request for /pizzas/monthly-sales
  }

  getStreaks = async () => {
    // fetch request for /pizzas/streaks
  }

  getToppings = async () => {
    // fetch call to /pizzas to retreive all toppings
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
          />
        </div>
      </div>
    )
  }
}

export default PizzasContainer
