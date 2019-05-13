import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SearchForm = props => {
  return (
    <Container className="name-search">
      <Form onSubmit={ props.handleOnSubmit }>
        <FormGroup>
          <Label for="name">Name: </Label>
          <Input type="text"
            name="name"
            onChange={ props.handleOnChange }
            value={ props.nameValue } />
          <Button>Search</Button>
        </FormGroup>
      </Form>
    </Container>
  )
}

export default SearchForm
