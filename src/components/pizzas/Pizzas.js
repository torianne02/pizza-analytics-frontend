import React from 'react';
import Pizza from './Pizza';

const Pizzas = ( props ) =>
  <div className="pizzas-list">
    <h1>Pizzas</h1>
    { props.pizzas.map((pizza, i) => {
      return <Pizza
        topping={ pizza.topping }
        date={ pizza.date_consumed }
        key={ i }
      />
    }) }
  </div>

export default Pizzas
