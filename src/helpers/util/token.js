function validateJWT(jwt) {
  return true;
}

function storeToken(jwt) {
  localStorage.setItem("jwtToken", jwt);
}

function getToken() {
  return localStorage.getItem("jwtToken");
}

function hasToken() {
  return !!localStorage.getItem("jwtToken");
}

export default {
  getToken,
  storeToken,
  validateJWT,
  hasToken
}