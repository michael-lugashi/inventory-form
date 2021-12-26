import React from 'react';
import { useSelector } from 'react-redux';
// import equipmentList from '../model/equipment-list';

function EquipmentItems() {
 const equipmentList = useSelector((state) => state.equipmentList);
 return (
  <tbody>
   {equipmentList.map(({ name, fullQuantity, currentQuantity, missing }, i) => {
    return (
     <tr key={name}>
      <td>{i}</td>
      <td>{name}</td>
      <td>{fullQuantity}</td>
      <td>{currentQuantity}</td>
      <td>{missing}</td>
     </tr>
    );
   })}
  </tbody>
 );
}

export default EquipmentItems;
