import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const Person = ( props ) =>
  <div className="person-info">
    <ListGroup>
      <ListGroupItem>
        <ListGroupItemHeading>{ props.name }</ListGroupItemHeading>
          { props.pizzas.map((pizza, i) => {
            return(
              <ListGroupItemText key={ i }>
                { pizza.topping } - { pizza.date_consumed }
              </ListGroupItemText>
            )
          })}
      </ListGroupItem>
    </ListGroup>
  </div>

export default Person
