import { SUBMIT_FORM, UPDATE_WORKER_DETAILS } from './action-types';
import initialWorkerInfo from '../model/initial-worker-Info';

const workerReducer = (state = initialWorkerInfo, { type, payload }) => {
 switch (type) {
  case UPDATE_WORKER_DETAILS:
   return payload;
  case SUBMIT_FORM:
   return {...initialWorkerInfo};

  default:
   return state;
 }
};

export default workerReducer;
