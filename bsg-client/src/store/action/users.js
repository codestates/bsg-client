const axios = require('axios')

export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNOUT_USER = 'SIGNOUT_USER';
export const GETUSER_DATA = 'GETUSER_DATA';
export const SECEDE_USER = 'SECEDE_USER'


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

export const secedeUser = (data) => {
  return {
    type : SECEDE_USER,
    data
  }
}