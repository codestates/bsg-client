const axios = require('axios')

export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNOUT_USER = 'SIGNOUT_USER';
export const GETUSER_DATA = 'GETUSER_DATA';
export const SECEDE_USER = 'SECEDE_USER';
export const SET_ACCESS_TOKEN ='SET_ACCESS_TOKEN'

export const IS_LOGIN = 'IN_LOGIN';
export const NOW_LOGIN = 'NOW_LOGIN'
export const NOW_LOGOUT = 'NOW_LOGOUT'


export const signUpUser = (data) => {
  return {
    type : SIGNUP_USER,
    data
  }
}

export const signInUser = (data) => {
  return {
    type : SIGNIN_USER,
    data
  }
}

export const signOutUser = () => {
  return {
    type : SIGNOUT_USER
  }
}

export const getUserData = (data) => {
  return {
    type : GETUSER_DATA,
    data
  }
}

export const secedeUser = (data) => {
  return {
    type : SECEDE_USER,
    data
  }
}

export const isLogin = () => {
  return {
    type : IS_LOGIN
  }
}

export const nowLogIn = () => {
  return {
    type : NOW_LOGIN
  }
}

export const nowLogOut = () => {
  return {
    type : NOW_LOGOUT
  }
}

export const setAccessToken = (data) => {
  return {
    type : SET_ACCESS_TOKEN,
    data
  }
}

export const signingUpUser = (userdata) => {
  return (dispatch) => {
    return axios.post('서버 URL',{
      data : userdata
    })
    .then((res) => {
      if(res.message === 'OK'){
        dispatch(setAccessToken(res.data.accessToken))
        dispatch(getUserData(res.data))  
        dispatch(nowLogIn())
      }
    }).catch((err) => {
      throw(err)
    })
  }
}

export const signingInUser = (userdata) => {
  return (dispatch) => {
    return axios.post('서버 URL', {
      data : userdata
    })
    .then((res) => {
      if(res.message === 'OK'){
        dispatch(setAccessToken(res.data.accessToken))
        dispatch(getUserData(res.data))
        dispatch(nowLogIn())
      }
    }).catch((err) =>{
      throw(err)
    })
  }
}

export const signingOutUser = (accessToken) => {
  return (dispatch) => {
    return axios.post('서버 URL', {
      accessToken 
    }).then((res) => {
      dispatch(getUserData(null))
      dispatch(setAccessToken(null))
      dispatch(nowLogOut())
    })
  }
}

export const secedingUser = (data) => {
  return (dispatch) => {
    return axios.post('서버 URL', {
      data
    }).then((res) => {
      dispatch(getUserData(null))
      dispatch(setAccessToken(null))
      dispatch(nowLogOut())
    })
  }
}