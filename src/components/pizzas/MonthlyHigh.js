import React from 'react';
import { Row, Card, CardTitle, CardBody, CardSubtitle } from 'reactstrap';

const MonthlyHigh = ( props ) =>
  <div className="monthly-high">
    <Card>
      <CardBody>
        <CardTitle>Highest Day of Consumption - Monthly</CardTitle>
        <CardSubtitle>
          { props.monthlySales.map((month, i) => {
            return <Row key={ i }>{ month.date_consumed } | { month.num_sales }</Row>
          })}
        </CardSubtitle>
      </CardBody>
    </Card>
  </div>

export default MonthlyHigh
