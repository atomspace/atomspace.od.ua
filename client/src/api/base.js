export const apiUrl = process.env.API_URL || 'http://127.0.0.1/api/v1';


export const createApiRequest = (url, method = 'GET', data, isCached = true) => {
  return new Promise((resolve, reject) => {
    let headers = new Headers({
      "Content-Type": "application/json"
    });
    let options = {
      method,
      headers,
      mode: "cors",
      cache: "default"
    }
    if (data) {
      options.body = JSON.stringify(data)
    }
    console.log(options);
    console.log(apiUrl + url);
    fetch(apiUrl + url, options)
      .then(res => res.json())
      .then(user => {
        resolve(user);
      })
      .catch(err => {
        reject(err);
      });
  });
};