import React from 'react';
import Streak from './Streak';

const Streaks = ( props ) =>
  <div className="streaks-list">
    { props.streaks.map((streak, i) => {
        return <Streak
          streak={ streak }
          key={ i }
        />
    }) }
  </div>

export default Streaks
