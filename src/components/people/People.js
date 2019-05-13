import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import Person from './Person';

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
