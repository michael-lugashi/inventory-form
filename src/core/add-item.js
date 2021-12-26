import React from 'react';
import { Form, Button } from 'react-bootstrap';
function AddItem(props) {
 return (
  <div>
   <h4>Add Item:</h4>
   <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <Form.Label>Item Name</Form.Label>
     <Form.Control size="sm" type="text" />
     <Form.Label>Full Quantity</Form.Label>
     <Form.Control size="sm" type="text" />
     <Form.Label>Current Quantity</Form.Label>
     <Form.Control type="date" />
     <br />
     <Button variant="outline-primary">Add</Button>
    </Form.Group>
   </Form>
  </div>
 );
}

export default AddItem;
