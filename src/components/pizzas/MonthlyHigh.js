import React from 'react';
import { Row, Card, CardTitle, CardSubtitle, CardBody} from 'reactstrap';

const MonthlyHigh = ( props ) =>
  <div className="monthly-high">
    <Card>
      <CardBody>
        <CardTitle>Highest Day of Consumption - Monthly</CardTitle>
        <CardText>
          { props.map((month) => {
            return <Row>{ month.date_consumed } | { month.num_pizzas }</Row>
          })}
        </CardText>
      </CardBody>
    </Card>
  </div>

export default MonthlyHigh
