import React from 'react';
import AddItem from './add-item';
import EquipmentTable from './equipment-table';

function EquipmentForm(props) {
 return (
  <div>
   <h3>Equipment List</h3>
   <hr />
   <EquipmentTable />
   <AddItem />
  </div>
 );
}

export default EquipmentForm;
