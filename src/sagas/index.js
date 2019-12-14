import { all, fork } from 'redux-saga/effects';
import { watchFindAllCustomers } from './customer';

export default function* sagas(){
    yield all([
        fork(watchFindAllCustomers),
    ]);
}