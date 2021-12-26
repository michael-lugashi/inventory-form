import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { submitForm, updateWorkerDetails } from '../app/actions';

function UserInfo() {
 const [fullName, setFullName] = useState('');
 const [workPlace, setWorkPlace] = useState('');
 const [date, setDate] = useState('');
 const dispatch = useDispatch();

 const resetInputs = () => {
  setFullName('');
  setWorkPlace('');
  setDate('');
 };
 return (
  <div>
   <h3>Worker Details</h3>
   <hr />
   <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <Form.Label>Full Name</Form.Label>
     <Form.Control
      value={fullName}
      size="sm"
      type="text"
      onChange={(e) => {
       setFullName(e.target.value);
      }}
     />
     <Form.Label>Work Place</Form.Label>
     <Form.Control
      value={workPlace}
      size="sm"
      type="text"
      onChange={(e) => {
       setWorkPlace(e.target.value);
      }}
     />
     <Form.Label>Date</Form.Label>
     <Form.Control
      value={date}
      type="date"
      onChange={(e) => {
       setDate(e.target.value);
      }}
     />
     <br />
     <Button
      onClick={() => {
       dispatch(
        updateWorkerDetails({
         fullName,
         workPlace,
         date,
        })
       );
       dispatch(submitForm());
       resetInputs();
      }}
      variant="outline-primary"
     >
      Submit
     </Button>
    </Form.Group>
   </Form>
  </div>
 );
}

export default UserInfo;
