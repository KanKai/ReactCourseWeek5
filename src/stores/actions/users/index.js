import actionTypes from '../actionTypes'

const setUserInfo = dispatch => data => {
  dispatch({
    type: actionTypes.SET_USER_INFOMATION,
    payload: data
  })
}

export default {
  setUserInfo
}