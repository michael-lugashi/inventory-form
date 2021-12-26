import { SUBMIT_FORM, ADD_ITEM, CHANGE_QUANTITY } from './action-types';
import equipmentList from '../model/equipment-list';
import swal from 'sweetalert';

const equipmentReducer = (state = equipmentList, { type, payload }) => {
 switch (type) {
  case CHANGE_QUANTITY:
   const newQuantityState = state.map((item) => {
    if (item.name === payload.name) {
     item.currentQuantity = payload.quantity;
     item.missing = item.fullQuantity - payload.quantity;
    }
    return item;
   });

   return newQuantityState;

  case ADD_ITEM:
   try {
    for (const { name } of state) {
     if (name === payload.name) {
      console.log(name);
      throw new Error('Item already in list!');
     }
    }
    payload.missing = payload.fullQuantity - payload.currentQuantity;
    swal('', 'Item successfuly added!', 'success');
    return [...state, payload];
   } catch (error) {
    swal('Oops!', error.message, 'error');
    return state;
   }

  case SUBMIT_FORM:
   const emptyList = state.map((item) => {
    item.currentQuantity = 0;
    item.missing = item.fullQuantity;
    return item;
   });
   swal('', 'Form successfully submitted!', 'success');
   return emptyList;

  default:
   return state;
 }
};

export default equipmentReducer;
