import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';

const People = ( props ) =>
  <div className="people-list">
    <ListGroup>
      <ListGroupItem>
        { props.people.map((person) => {
          return (
            <ListGroupItemText>{ props.name }</ListGroupItemText>
          )
        }) }
      </ListGroupItem>
    </ListGroup>
  </div>

export default People
