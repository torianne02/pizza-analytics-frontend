import React from 'react';
import { Row, Card, CardTitle, CardBody, CardSubtitle} from 'reactstrap';

const Streak = ( props ) =>
  <div className="streak">
    <Card key={ props.key }>
      <CardBody>
        <CardTitle>Streak</CardTitle>
        <CardSubtitle>
          {props.streak.map((day, i) => {
            return (<Row key={ i }>{ day.date_consumed } | { day.num_pizzas }</Row>)
          })}
        </CardSubtitle>
      </CardBody>
    </Card>
  </div>

export default Streak
