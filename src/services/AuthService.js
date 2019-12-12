const URL = 'http://192.168.0.124:3000/customers';

const loginService = async () => {
    const response = await fetch(URL);
    return await response.json();
}

export { loginService };