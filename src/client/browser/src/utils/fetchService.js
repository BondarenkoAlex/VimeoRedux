export function fet(url, options) {
  return fetch(url, options)
    .then(
      (response) => {
        if (response.status >= 200 && response.status < 300) {
          if (response.status === 204) {
            //No content
            return response.text();
          } else {
            let contentType = response.headers.get('Content-Type');
            if (contentType && contentType.indexOf('json') >= 0) {
              return response.json();
            } else {
              return response.text();
            }
          }
        } else {
          return response.text().then(result=>Promise.reject(result));
        }
      },
    )
    .then(json => Promise.resolve(json))
    .catch(error => Promise.reject(error));
}
