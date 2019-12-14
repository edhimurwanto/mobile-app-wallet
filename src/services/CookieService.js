export const getCookies = function(response) {
    const cookies = {}
    for (const [name, values] of response.headers) {
      if (name === 'set-cookie') {
        for (const cookie of values.split(';')) {
          const [key, value] = cookie.split('=')
          cookies[key] = value
        }
      }
    }
  
    return cookies
  }