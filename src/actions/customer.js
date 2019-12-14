export const FIND_ALL_CUSTOMER = 'FIND_ALL_CUSTOMER';
export const FIND_ALL_CUSTOMER_SUCCESS = 'FIND_ALL_CUSTOMER_SUCCESS';
export const FIND_ALL_CUSTOMER_ERROR = 'FIND_ALL_CUSTOMER_ERROR';

export function findAllCustomers (){
    return {
        type: FIND_ALL_CUSTOMER
    }
}