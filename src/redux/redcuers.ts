// src/store/rootReducer.ts
import { combineReducers } from 'redux';
import authenticationReducers from './features/AuthenticationReducers';

const rootReducer = combineReducers({
  authentication: authenticationReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;