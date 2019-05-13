import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropdownContainer extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      toppings: [],
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  getDropdownItems() {
    return (
      this.state.toppings.map((topping) => {
        <DropdownItem>topping</DropdownItem>
      })
    )
  }

  render() {
    return (
      <div className="dropdown-menu">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Pizza by Topping
          </DropdownToggle>
          { this.getDropdownItems() }
        </Dropdown>
      </div>
    )
  }
}

export default ToppingSearch
