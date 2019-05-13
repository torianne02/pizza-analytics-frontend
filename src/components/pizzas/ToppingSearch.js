import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ToppingSearch extends React.Component {
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
        return (<DropdownItem>{ topping }</DropdownItem>)
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
          <DropdownMenu>
            { this.getDropdownItems() }
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}

export default ToppingSearch
