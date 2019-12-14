import { combineReducers } from 'redux';
import { findAllCustomers } from './customerReducer';

const allReducers = combineReducers({
    findAllCustomers
})

export default allReducers;