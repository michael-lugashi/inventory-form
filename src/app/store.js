import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const rootReducer = combineReducers(equipmentReducer, workerReducer)

const store = createStore(rootReducer, applyMiddleware(logger))

export default store