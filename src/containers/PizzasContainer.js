import React, { Component } from 'react';
import Pizzas from '../components/pizzas/Pizzas';
import MonthlyHigh from '../components/pizzas/MonthlyHigh';
import Streaks from '../components/pizzas/streaks/Streaks';

class PizzasContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [],
      monthlySales: [],
      streaks: [],
    }
  }

  componentDidMount() {
    const requestInfo = {
      method: 'GET',
    }

    fetch(`http://127.0.0.1:9393/api/v1/pizzas`, requestInfo)
    .then(response => response.json().then(json => {
      this.setState({
        pizzas: json,
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
      </div>
    )
  }
}

export default PizzasContainer
