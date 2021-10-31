import React, { Component } from 'react';
import { Button, Row, Col, Input } from 'react-bootstrap';

class Login extends Component {
  render() {
    return (
      <div class='test'>
        <label for='staticEmail' class='col-sm-2 col-form-label'>
          Email
        </label>
        <div class='col-sm-10'></div>
        <Row className='mx-0'>
          <Button as={Col} variant='primary'>
            Button #1
          </Button>
          <Button as={Col} variant='secondary' className='mx-2'>
            Button #2
          </Button>
          <Button as={Col} variant='success'>
            Button #3
          </Button>
        </Row>
      </div>
    );
  }
}

export default Login;
