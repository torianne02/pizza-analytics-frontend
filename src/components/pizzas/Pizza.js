import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const Pizza = ( props ) =>
  <div className="pizza">
    <ListGroup>
      <ListGroupItem>
        <ListGroupItemHeading>{ props.topping }</ListGroupItemHeading>
        <ListGroupItemText>
          Day of Consumption: { props.date }
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup>
  </div>

export default Pizza
