const URL = 'http://10.10.16.153:3000/auth/login';

const loginService = async (data) => {

    const { email, password } = data;
    return await fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
    });
}

export { loginService };