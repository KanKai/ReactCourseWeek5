import {token} from 'helpers/util'
import pathEndpoints from 'requests/endpoints';
// import history from 'routes/history'

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
  try {
    let authToken = token.getToken();
    if(!authToken) { // ถ้าไม่มี Token
      if(path !== pathEndpoints.LOGIN && path !== pathEndpoints.REGISTER){
        alert("Token has expired: Error 403");
        location.reload(); // reload เพื่อกลับไปหน้า login
        // throw new ReqError("Token has expired", 403);
      }
    }else { 
      // ถ้ามี token ใส่ Bearer เข้าไปด้านหน้าของ Token 
      // แล้วใส่เข้าไปใน headers.Authorization
      headers.Authorization = `Bearer ${authToken}`;
    }
    return fetch(`${endpoints.baseAPI}${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        // ถ้ามี token จะใส่มากับ headers object
        ...headers
      },
      // body
      body: JSON.stringify(body)
    })
      .then(handleError)
      .then(handleResponse)
  } catch (error) {
    handleErrorElse(error);
  }
};

export default { fetchAPI };
