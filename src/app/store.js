import {
 applyMiddleware,
 combineReducers,
 createStore,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import equipmentReducer from './equipment-reducer';
import workerReducer from './worker-reducer';

const rootReducer = combineReducers({
 equipmentList: equipmentReducer,
 workerDetails: workerReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
