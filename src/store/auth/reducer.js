import { createReducer } from 'redux-act';
const initalState = { isAuthenticated: true };
const auth = createReducer({}, initalState);
export default auth;
