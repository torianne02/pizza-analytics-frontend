import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';

const People = ( props ) =>
  <div className="people-list">
    <h1>Pizza Consumers</h1>
    <ListGroup>
      <ListGroupItem>
        { props.people.map((person, i) => {
          return (
            <ListGroupItemText key={i}>{ person.name }</ListGroupItemText>
          )
        }) }
      </ListGroupItem>
    </ListGroup>
  </div>

export default People
