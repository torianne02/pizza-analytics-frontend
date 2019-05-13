import React from 'react';
import { Row, Col, Card, CardTitle, CardSubtitle, CardBody} from 'reactstrap';

const MonthlyHigh = ( props ) =>
  <div className="monthly-high">
    <Card>
      <CardBody>
        <CardTitle>Highest Day of Consumption - Monthly</CardTitle>
        <CardText>
          { props.map((pizza) => {
            return <Row>{ pizza.date } | { pizza.numSales }</Row>
          })}
        </CardText>
      </CardBody>
    </Card>
  </div>

export default MonthlyHigh
