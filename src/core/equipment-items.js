import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity } from '../app/actions';

function EquipmentItems() {
 const inputQuantity = useRef(null);
 const equipmentList = useSelector((state) => state.equipmentList);
 const dispatch = useDispatch();

 return (
  <tbody>
   {equipmentList.map(({ name, fullQuantity, currentQuantity, missing }, i) => {
    return (
     <tr key={name}>
      <td>{i}</td>
      <td>{name}</td>
      <td>{fullQuantity}</td>
      <td>
       <input
        className="current-quantity-input"
        ref={inputQuantity}
        type="number"
        min={0}
        max={fullQuantity}
        value={currentQuantity}
        onInput={(e) => {
         let value = Number(e.target.value);
         e.target.value = value; // to get rid of prefixing zero
         if (value < 0) {
          value = 0;
         }
         if (value > fullQuantity) {
          value = fullQuantity;
         }
         dispatch(changeQuantity(value, name));
        }}
       />
      </td>
      <td>{missing}</td>
     </tr>
    );
   })}
  </tbody>
 );
}

export default EquipmentItems;
