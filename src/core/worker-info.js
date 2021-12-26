import React from 'react';
import { Form, Button } from 'react-bootstrap';

function UserInfo(props) {
 return (
  <div>
   <h3>Worker Details</h3>
   <hr />
   <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <Form.Label>Full Name</Form.Label>
     <Form.Control size="sm" type="text" />
     <Form.Label>Work Place</Form.Label>
     <Form.Control size="sm" type="text" />
     <Form.Label>Date</Form.Label>
     <Form.Control type="date" />
     <br />
     <Button variant="outline-primary">Send</Button>
    </Form.Group>
   </Form>
  </div>
 );
}

export default UserInfo;
