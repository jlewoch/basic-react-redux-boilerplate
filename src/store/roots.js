import { combineReducers } from 'redux';
// Sagas

// Reducers
import auth from './auth/reducer';
// Combine Reducers
export const rootReducer = combineReducers({ auth });
export function rootSaga(saga) {}
