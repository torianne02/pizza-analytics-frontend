import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ToppingSearch = props => {

  // filters unique toppings to have in dropdown
  const uniqueToppings = () => {
    let unique = [...new Set(props.toppings)]
    return unique
  }

  return (
    <Form onSubmit={ props.handleOnSubmit }>
      <FormGroup>
        <Label for="topping-search"><h3>Search Pizzas by Topping</h3></Label>
        <Input
          type="select"
          name="topping"
          onChange={ props.handleOnChange }>
          { uniqueToppings().map((topping, i) => {
            return <option key={ i }>{ topping }</option>
          }) }
        </Input>
        <Button>Search</Button>
      </FormGroup>
    </Form>
  )
}

export default ToppingSearch
