import { FIND_ALL_CUSTOMER, FIND_ALL_CUSTOMER_SUCCESS, FIND_ALL_CUSTOMER_ERROR } from '../actions/customer';

export const findAllCustomers = ( state = { data: [], loading: false, error: null }, action) => {
    const { type } = action;
    switch (type) {

        case FIND_ALL_CUSTOMER:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FIND_ALL_CUSTOMER_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }

        case FIND_ALL_CUSTOMER_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
        default:
            return state;
    }
}