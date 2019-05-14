import React from 'react';
import { Row, Card, CardTitle, CardBody, CardText } from 'reactstrap';

const MonthlyHigh = ( props ) =>
  <div className="monthly-high">
    <Card>
      <CardBody>
        <CardTitle>Highest Day of Consumption - Monthly</CardTitle>
        <CardText>
          { props.monthlySales.map((month, i) => {
            return (<Row id={ i }>{ month.date_consumed } | { month.num_sales }</Row>)
          })}
        </CardText>
      </CardBody>
    </Card>
  </div>

export default MonthlyHigh
