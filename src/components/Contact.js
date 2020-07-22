import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';

class Contact extends React.Component {
  render() {
    return (
      <div className='ui grid'>
        <div className='eight wide column'>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                label='First name'
                placeholder='First name'
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-last-name'
                label='Last name'
                placeholder='Last name'
              />
            </Form.Group>
            <Form.Field
              control={TextArea}
              label='Message'
              placeholder='Tell us more about you...'
            />
          </Form>
        </div>
        <div className='eight wide column'>
          <h1>Google maps</h1>
        </div>
      </div>
    );
  }
}

export default Contact;
