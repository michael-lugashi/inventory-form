import { SUBMIT_FORM, ADD_ITEM, CHANGE_QUANTITY } from './action-types';
import equipmentList from '../model/equipment-list';

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
   payload.missing = payload.fullQuantity - payload.currentQuantity;
   return [...state, payload];

  case SUBMIT_FORM:
   const emptyList = state.map((item) => {
    item.currentQuantity = 0;
    item.missing = item.fullQuantity;
    return item;
   });
   return emptyList;

  default:
   return state;
 }
};

export default equipmentReducer;
