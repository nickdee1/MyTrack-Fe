import { createStore } from '@reduxjs/toolkit'
import {compose} from 'redux';
import {rootReducer} from './reducers/rootReducer';

export const store = createStore(
  rootReducer,
  compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
