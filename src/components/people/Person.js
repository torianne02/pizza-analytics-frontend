import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const Person = ( props ) =>
  <div className="person-info">
    <ListGroup>
      <ListGroupItem>
        <ListGroupItemHeading>{ props.name }</ListGroupItemHeading>
        <ListGroupItemText>
          // list pizzas
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup>
  </div>

export default Person
