import React from 'react';
import { Header, Button, Checkbox, Form } from 'semantic-ui-react'

class OfferForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }


  createFormData(paramArray) {
    // console.log(paramArray)
    let labelArray = paramArray.map((param) => {
      return(
        <Form.Field>
          <label htmlFor={param}>Enter {param}</label>
          <input id={param} name={param} type="text" />
        </Form.Field>
      )
    })

    // console.log(labelArray);
    return labelArray;
  }

  render() {
    let paramArray = ["namespace", "cid", "size", "time", "geo", "rate", "until"];
    return (
      <div>

        <Header as='h1'>Submit Offer</Header>

        <Form onSubmit={this.handleSubmit}>
          {this.createFormData(paramArray)}
          <Button type='submit'>Submit</Button>
        </Form>

      </div>
    );
  }
}
export default OfferForm;
