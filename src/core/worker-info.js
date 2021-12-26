import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { submitForm, updateWorkerDetails } from '../app/actions';

function UserInfo() {
 const [fullName, setFullName] = useState('');
 const [workPlace, setWorkPlace] = useState('');
 const dispatch = useDispatch();
 const [date, setDate] = useState(initialDate());
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
       try {
        if (!fullName || !workPlace || !date) {
         throw new Error('All worker details must be included!');
        }
        dispatch(
         updateWorkerDetails({
          fullName,
          workPlace,
          date,
         })
        );
        dispatch(submitForm());
        resetInputs();
       } catch (error) {
        swal('Oops!', error.message, 'error');
       }
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

function initialDate() {
 const date = new Date();
 const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
 ];

 return `${year}-${month}-${day}`;
}
