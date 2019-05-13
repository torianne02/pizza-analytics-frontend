import React from 'react';
import { Row, Card, CardTitle, CardBody, CardText} from 'reactstrap';

const Streak = ( props ) =>
  <div className="streak">
    <Card>
      <CardBody>
        <CardTitle>Streak</CardTitle>
        <CardText>
          { props.map((day) => {
            return(<Row>{ day.date } | { day.numSales }</Row>)
          })}
        </CardText>
      </CardBody>
    </Card>
  </div>

export default Streak
