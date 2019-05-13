import React from 'react';
import Streak from './Streak';

const Streaks = ( props ) =>
  <div className="streaks-list">
    { props.streaks.map((streak) => {
      return <Streak
        numSales={ streak.num_pizzas }
        date={ streak.date_consumed }
      />
    }) }
  </div>

export default Streaks
