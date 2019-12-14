const URL = 'http://192.168.43.201:3000/customers';

const getCustomer = async () => {
    const response = await fetch(URL);
    return await response.json();
}


export { getCustomer };