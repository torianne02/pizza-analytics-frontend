import React from 'react';
import { Row, Card, CardTitle, CardBody, CardSubtitle } from 'reactstrap';

const MonthlyHigh = ( props ) =>
  <div className="monthly-high">
    <Card>
      <CardBody>
        <CardTitle><h3>Highest Day of Consumption - Monthly</h3></CardTitle>
        <CardSubtitle>
          { props.monthlySales.map((month, i) => {
            return <Row key={ i }>Day: { month.date_consumed } | Number of Pizzas: { month.num_sales }</Row>
          })}
        </CardSubtitle>
      </CardBody>
    </Card>
  </div>

export default MonthlyHigh
