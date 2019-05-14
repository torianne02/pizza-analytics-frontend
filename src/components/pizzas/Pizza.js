import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const Pizza = ( props ) =>
  <div className="pizza">
    <ListGroup>
      <ListGroupItem>
        <ListGroupItemHeading>Type: { props.topping }</ListGroupItemHeading>
        <ListGroupItemText key={ props.i }>
          Day of Consumption: { props.date }
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup>
  </div>

export default Pizza
