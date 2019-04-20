import endpoints from "requests/endpoints";
import { API } from "configs";
import {token} from 'helpers/util';

const login = (identifier, password) => {
  API.fetchAPI(endpoints.LOGIN, "post", {
    identifier, password
  }).then((res) => {
    // console.log('login response', res);
    token.storeToken(res.jwt);
  }).catch((err) => {
    alert(err.response.error.message);
  })
};

export default {
  login
};
