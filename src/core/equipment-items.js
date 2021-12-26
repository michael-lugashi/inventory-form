import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity } from '../app/actions';
// import equipmentList from '../model/equipment-list';

function EquipmentItems() {
 const equipmentList = useSelector((state) => state.equipmentList);
 const dispatch = useDispatch();
 return (
  <tbody>
   {equipmentList.map(
    ({ name, fullQuantity, currentQuantity, missing }, i) => {
     return (
      <tr key={name}>
       <td>{i}</td>
       <td>{name}</td>
       <td>{fullQuantity}</td>
       <td>
        <input
         type="number"
         min={0}
         max={fullQuantity}
         defaultValue={currentQuantity}
         onChange={({ target: { value } }) => {
          if (value < 0) {
           value = 0;
          }
          if (value > fullQuantity) {
           value = fullQuantity;
          }
          dispatch(changeQuantity(Number(value), name));
         }}

         onBlur={(e) => {
          if (!e.target.value || e.target.value < 0) {
           e.target.value = 0;
          }
          if (e.target.value > fullQuantity) {
           e.target.value = fullQuantity;
          }
         }}
        />
       </td>
       <td>{missing}</td>
      </tr>
     );
    }
   )}
  </tbody>
 );
}

export default EquipmentItems;
