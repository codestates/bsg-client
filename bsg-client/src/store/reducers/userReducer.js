import { LOGOUT_USER } from '../action/users'
import { GETUSER_DATA } from '../action/users'
import { SIGN_OUT_USER } from '../action/users'
import { SET_ACCESS_TOKEN } from '../action/users'
import { SET_ERROR_MESSAGE } from '../action/users'
import { NOW_LOGIN } from '../action/users'
import { NOW_LOGOUT } from '../action/users'

const initialState = {
  isLogin : false,
  userNow : null,
  accessToken : null,
}

export default function(state = initialState, action){
  switch (action.type){
    case LOGOUT_USER : 
    return {
      ...state,
      userNow : null,
    }
    case GETUSER_DATA : 
    return {
      ...state,
      userNow : action.data
    }
    case SIGN_OUT_USER : 
    return {
      ...state,
      userNow : null
    }
    case SET_ACCESS_TOKEN : 
    return {
      ...state,
      accessToken : action.accessToken
    }
    case NOW_LOGIN :
    return {
      ...state,
      isLogin : true
    }
    case NOW_LOGOUT : 
    return {
      ...state,
      isLogin : false
    } 
    case SET_ERROR_MESSAGE : 
    return {
      ...state,
      errorMessage : action.message
    }
    default :
      return state 
  }
}