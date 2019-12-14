const URL = 'http://10.10.16.153:3000/customers';

const getCustomer = async () => {
    const response = await fetch(URL);
    return await response.json();
}

export { getCustomer };