import React from 'react';
import { Table } from 'react-bootstrap';
import EquipmentItems from './equipment-items';

function EquipmentTable(props) {
 return (
  <Table striped bordered hover>
   <thead>
    <tr>
     <th>#</th>
     <th>Item Name</th>
     <th>Full Quantity</th>
     <th>Current Quantity</th>
     <th>Missing</th>
    </tr>
   </thead>
   <EquipmentItems />
  </Table>
 );
}

export default EquipmentTable;
