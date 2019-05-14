import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SearchForm = props => {
  return (
    <Container className="form">
      <Form onSubmit={ props.handleOnSubmit }>
        <FormGroup>
          <Label for="name">Who Do You Want to See?</Label>
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
