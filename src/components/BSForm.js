import React from "react";
import { Form, Button } from "react-bootstrap";
function BSForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicFirst">
        <Form.Label>First Name </Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLast">
        <Form.Label>Last Name </Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMsg">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BSForm;
