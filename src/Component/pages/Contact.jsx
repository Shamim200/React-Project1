import React from 'react'
import {Container, Form, Button} from 'react-bootstrap'

const Contact = () => {
  return (
    <Container>
      <br />
      <h2 className="text-center">Contact page</h2>
      <br />

      <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="text" placeholder="Enter Full Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="outline-success" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default Contact