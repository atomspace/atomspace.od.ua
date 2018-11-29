export const apiUrl = "http://127.0.0.1:8000/api/v1";


export const createApiRequest = (url, data, method = 'GET', isCached = true) => {
    let headers = new Headers({
      "Content-Type": "application/json"
    });
    return new Promise((res, rej) => {
      let options = {
          method: method,
          headers,
          mode: "cors",
          cache: "default"
      }
      if(data) {
          options.body = JSON.stringify(data)
      }
      console.log(options);
      fetch(apiUrl + url, options)
      .then(res => {
          console.log(res.headers.get("Content-Type"));
          console.log(res.status);
          return res.json();
        })
        .then(user => {
          res(JSON.parse(user)); // iliakan
        })
        .catch(err => {
          console.error(err);
        });
    });
  };