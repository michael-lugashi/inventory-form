import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem } from '../app/actions';

function AddItem() {
 const dispatch = useDispatch();
 const [name, setName] = useState('');
 const [fullQuantity, setFullQuantity] = useState(0);
 const [currentQuantity, setCurrentQuantity] = useState(0);
 return (
  <div>
   <h4>Add Item:</h4>
   <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <Form.Label>Item Name</Form.Label>
     <Form.Control
      size="sm"
      type="text"
      onChange={(e) => {
       setName(e.target.value);
      }}
     />
     <Form.Label>Full Quantity</Form.Label>
     <Form.Control
      size="sm"
      type="number"
      onChange={(e) => {
       setFullQuantity(e.target.value);
      }}
     />
     <Form.Label>Current Quantity</Form.Label>
     <Form.Control
      type="number"
      onChange={(e) => {
       setCurrentQuantity(e.target.value);
      }}
     />
     <br />
     <Button
      onClick={(e) => {
       dispatch(
        addItem({
         name,
         fullQuantity,
         currentQuantity,
        })
       );
      }}
      variant="outline-primary"
     >
      Add
     </Button>
    </Form.Group>
   </Form>
  </div>
 );
}

export default AddItem;
