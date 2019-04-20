const endpoints = {
  baseURI: "http://34.74.91.102",
  baseAPI: "http://34.74.91.102"
};

function ReqError(message, status) {
  this.response = {
    error: {
      message,
      status
    }
  };
  return this;
}
// You will get this.
// {
//   response: {error: {message: "", status:404}}
// }

const handleError = async response => {
  if (!response.ok) {
    const res = await response.json();
    const {message, statusCode} = res;
    throw new ReqError(message, statusCode);
  }
  return response;
};

const handleResponse = async response => {
  const toJSON = await response.json();
  return toJSON;
};

const handleErrorElse = async err => {
  console.log('handle error else', err);
  if (!('response' in err)) {
    throw new ReqError(err, 400);
  }
  throw err;
};

const fetchAPI = (
  path = "/",
  method = "GET",
  body = undefined,
  headers = {}
) => {
  return fetch(`${endpoints.baseAPI}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    // body
    body: JSON.stringify(body)
  })
    .then(handleError)
    .then(handleResponse)
    .catch(handleErrorElse);
};

export default { fetchAPI };
