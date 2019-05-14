import React from 'react';
import { Row, Card, CardBody, CardSubtitle} from 'reactstrap';

const Streak = ( props ) =>
  <div className="streak">
    <Card key={ props.key }>
      <CardBody>
        <CardSubtitle>
          {props.streak.map((day, i) => {
            return (<Row key={ i }>Day: { day.date_consumed } | Number of Pizzas: { day.num_pizzas }</Row>)
          })}
        </CardSubtitle>
      </CardBody>
    </Card>
  </div>

export default Streak
