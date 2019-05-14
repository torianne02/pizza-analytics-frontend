import React from 'react';
import { Row, Card, CardTitle, CardBody, CardText} from 'reactstrap';

const Streak = ( props ) =>
  <div className="streak">
    <Card>
      <CardBody>
        <CardTitle>Streak</CardTitle>
        <CardText>
          <Row>{ props.date } | { props.numSales }</Row>
        </CardText>
      </CardBody>
    </Card>
  </div>

export default Streak
