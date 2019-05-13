import React from 'react';
import Pizza from './Pizza';

const Pizzas = ( props ) =>
  <div className="pizzas-list">
    { props.pizzas.map((pizza) => {
      return <Pizza
        topping={ pizza.topping }
        date={pizza.date}
      />
    }) }
  </div>

export default Pizzas
