import React from 'react';

const Streaks = ( props ) =>
  <div className="streaks-list">
    { props.streaks.map((streak) => {
      return <Streak
        numSales={ pizza.num_pizzas }
        date={ pizza.date_consumed }
      />
    }) }
  </div>

export default Streaks
