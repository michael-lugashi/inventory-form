import {
 SUBMIT_FORM,
 ADD_ITEM,
 CHANGE_QUANTITY,
 UPDATE_WORKER_DETAILS,
} from './action-types';

export const changeQuantity = (quantity, name) => {
 return {
  type: CHANGE_QUANTITY,
  payload: { quantity, name },
 };
};
export const addItem = (newItem) => {
 return {
  type: ADD_ITEM,
  payload: newItem,
 };
};
