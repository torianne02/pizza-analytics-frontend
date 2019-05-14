import React from 'react';
import { Row, Card, CardTitle, CardBody, CardSubtitle} from 'reactstrap';

const Streak = ( props ) =>
  <div className="streak">
    <Card>
      <CardBody>
        <CardTitle>Streak</CardTitle>
        <CardSubtitle>
          <Row key={ props.i }>{ props.date } | { props.numSales }</Row>
        </CardSubtitle>
      </CardBody>
    </Card>
  </div>

export default Streak
