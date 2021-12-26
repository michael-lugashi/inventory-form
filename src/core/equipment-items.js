import React from 'react';
import equipmentList from '../model/equipment-list';

function EquipmentItems(props) {
 return (
  <tbody>
   {equipmentList.map(({ name, fullQuantity }, i) => {
    return (
     <tr>
      <td>{i}</td>
      <td>{name}</td>
      <td>{fullQuantity}</td>
      <td>0</td>
      <td>0</td>
     </tr>
    );
   })}
  </tbody>
 );
}

export default EquipmentItems;
