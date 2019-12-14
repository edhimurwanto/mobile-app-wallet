import { getCustomer } from '../services/CustomerService';
import { put, takeLatest } from 'redux-saga/effects';
import { FIND_ALL_CUSTOMER, FIND_ALL_CUSTOMER_SUCCESS, FIND_ALL_CUSTOMER_ERROR } from '../actions/customer';

function* findAllCustomers(){
    try {
        const data = yield getCustomer().then(json => {
            
            return json.data;
        });

        yield put({
            type: FIND_ALL_CUSTOMER_SUCCESS,
            data: data
        });

    } catch (error) {
        yield put({
            type: FIND_ALL_CUSTOMER_ERROR,
            error: error
        });
    }
}

export function* watchFindAllCustomers(){
    yield takeLatest(FIND_ALL_CUSTOMER, findAllCustomers);
}