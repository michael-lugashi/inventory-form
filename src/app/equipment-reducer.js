import { SUBMIT_FORM, ADD_ITEM, CHANGE_QUANTITY } from './action-types';
import equipmentList from '../model/equipment-list';

const equipmentReducer = (state = equipmentList, { type, payload }) => {
 switch (type) {
  case CHANGE_QUANTITY:
   return state;
  case ADD_ITEM:
   return state;
  case SUBMIT_FORM:
   return state;

  default:
   return state;
 }
};

export default equipmentReducer;
