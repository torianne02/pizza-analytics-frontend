import React, { Component } from 'react';
import People from '../components/people/People';

class PeopleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    }
  }

  componentDidMount() {
    const requestInfo = {
      method: 'GET',
    }

    fetch(`http://127.0.0.1:9393/api/v1/people`, requestInfo)
    .then(response => response.json().then(json => {
      console.log(json)
      this.setState({
        people: json,
      })
    }))
  }

  render() {
    return (
      <div className="people">
        <People
          people={this.state.people}
        />
      </div>
    )
  }
}

export default PeopleContainer
