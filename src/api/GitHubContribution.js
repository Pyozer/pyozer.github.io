const API_URL = "https://github-contributions-api.now.sh/v1/";

export function fetchData(username, callback) {
    fetch(API_URL + username)
        .then(response => response.json())
        .then(
            (result) => {
               callback(result, null);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                callback(null, error);
            }
      )
}