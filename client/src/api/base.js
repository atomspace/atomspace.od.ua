import { API_URL } from "../utils/config";

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
    fetch(API_URL + url, options)
      .then(res => res.json())
      .then(user => {
        resolve(user);
      })
      .catch(err => {
        reject(err);
      });
  });
};