import React, { useEffect, useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../app/actions';

function AddItem() {
 const dispatch = useDispatch();
 const nameInput = useRef(null);
 const [name, setName] = useState('');
 const [fullQuantity, setFullQuantity] = useState('');
 const [currentQuantity, setCurrentQuantity] = useState('');
 const workerDetails = useSelector((state) => state.workerDetails);

 const resetInputs = () => {
  setName('');
  setFullQuantity('');
  setCurrentQuantity('');
 };
 useEffect(() => {
  resetInputs();
 }, [workerDetails]);

 return (
  <div>
   <h4>Add Item:</h4>
   <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <Form.Label>Item Name</Form.Label>
     <Form.Control
      ref={nameInput}
      size="sm"
      value={name}
      type="text"
      onChange={(e) => {
       setName(e.target.value);
      }}
     />
     <Form.Label>Full Quantity</Form.Label>
     <Form.Control
      size="sm"
      value={fullQuantity}
      type="number"
      onChange={(e) => {
       setFullQuantity(e.target.value);
      }}
     />
     <Form.Label>Current Quantity</Form.Label>
     <Form.Control
      value={currentQuantity}
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
         fullQuantity: Number(fullQuantity),
         currentQuantity: Number(currentQuantity),
        })
       );
       resetInputs();
       console.log(workerDetails);
      }}
      variant="outline-primary"
     >
      Add Item
     </Button>
    </Form.Group>
   </Form>
  </div>
 );
}

export default AddItem;
