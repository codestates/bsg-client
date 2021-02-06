import { SIGNOUT_USER } from '../action/users'
import { GETUSER_DATA } from '../action/users'
import { SECEDE_USER } from '../action/users'
import { SET_ACCESS_TOKEN } from '../action/users'

import { NOW_LOGIN } from '../action/users'
import { NOW_LOGOUT } from '../action/users'

const initialState = {
  isLogin : false,
  userNow : {username : '테스터유저'},
  accessToken : null,
}

export default function(state = initialState, action){
  switch (action.type){
    case SIGNOUT_USER : 
    return {
      ...state,
      userNow : null,
    }
    case GETUSER_DATA : 
    return {
      ...state,
      userNow : action.data
    }
    case SECEDE_USER : 
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
    default :
      return state 
  }
}