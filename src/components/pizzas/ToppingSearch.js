import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ToppingSearch = props => {
  return (
    <Form onSubmit={ props.handleOnSubmit }>
      <FormGroup>
        <Label for="topping-search">Search Pizzas by Topping</Label>
        <Input
          type="select"
          name="toppings"
          onChange={ props.handleOnChange }>
          { this.props.toppings.map((topping) => {
            return <option>topping</option>
          }) }
        </Input>
        <Button>Search</Button>
      </FormGroup>
    </Form>
  )
}

export default ToppingSearch
