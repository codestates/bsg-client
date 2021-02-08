const axios = require('axios')

export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNIN_USER = 'SIGNIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const GETUSER_DATA = 'GETUSER_DATA';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const SET_ACCESS_TOKEN ='SET_ACCESS_TOKEN'
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'

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

export const LogOutUser = () => {
  return {
    type : LOGOUT_USER
  }
}

export const getUserData = (data) => {
  return {
    type : GETUSER_DATA,
    data
  }
}

export const SignOutUser = (data) => {
  return {
    type : SIGN_OUT_USER,
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
    accessToken : data
  }
}

export const setErrorMessage = (message) => {
  return {
    type : SET_ERROR_MESSAGE,
    message : message
  }
}
 


export const signingUpUser = (userdata) => {
  return (dispatch) => {
    return axios.post('https://api.projects1faker.com/signUp',{
      data : userdata
    })
    .then((res) => {
      if(res.message === "Email already exists"){
        dispatch(setErrorMessage('이미 존재하는 이메일입니다.'))
      }
      if(res.message === "Nickname already exists"){
        dispatch(setErrorMessage('이미 가입된 닉네임입니다'))
      }

      if(res.message === 'Create account successfully'){
        dispatch(setAccessToken(res.data.accessToken))
      }
    })
  }
}

export const signingInUser = (userdata) => {
  return (dispatch) => {
    return axios.post('https://api.projects1faker.com/login', {
      email : userdata.email,
      password : userdata.password
    })
    .then((res) => {
      if(res.message === 'ok'){
        dispatch(setAccessToken(res.data.accessToken))
        dispatch(nowLogIn())
        return res
      }
    }).then((res) => {
      axios.get('https://api.projects1faker.com/getUserInfo', {
        headers: {
          'authorization': `Bearer ${res.data.accessToken}` 
        }
      }).then((res) => {
        console.log(res)
        dispatch(getUserData(res.data)) 
      })
    })
  }
}

export const logOutUser = (accessToken) => {
  return (dispatch) => {
    return axios.post('서버 URL', {
      accessToken 
    }).then((res) => {
      dispatch(getUserData(null))
      dispatch(setAccessToken(null))
      dispatch(nowLogOut())
    }).catch((err) => {
      throw(err)
    })
  }
}

export const signingOutUser = (data) => {
  return (dispatch) => {
    return axios.post('서버 URL', {
      data
    }).then((res) => {
      dispatch(getUserData(null))
      dispatch(setAccessToken(null))
      dispatch(nowLogOut())
    }).catch((err) => {
      throw(err)
    })
  }
}