import { API_URL } from "../utils/config";

export const createApiRequest = (url, method = "GET", data) =>
  new Promise((resolve, reject) => {
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    const options = {
      method,
      headers,
      mode: "cors",
      cache: "default",
    };
    if (data) {
      options.body = JSON.stringify(data);
    }
    fetch(API_URL + url, options)
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
