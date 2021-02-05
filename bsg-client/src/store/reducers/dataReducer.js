import { SEARCH_DATA } from '../action/pagedata'
import { GET_VIDEOS } from '../action/pagedata'
import { GET_BOARD } from '../action/pagedata'
import { GET_COMMENT } from '../action/pagedata'
const fakeData = require('../reducers/fakedata') 

const initialState = {
  searchData : null,
  bestVideos : null,
  boards : fakeData,
  comments : null
}

export default function(state = initialState, action){
  switch (action.type){
    case SEARCH_DATA : 
    return {
      ...state,
      searchData : action.data
    }
    case GET_VIDEOS : 
    return {
      ...state,
      bestVideos : action.data
    }
    case GET_BOARD :
    return {
      ...state,
      boards : action.data
    }
    case GET_COMMENT : 
    return {
      ...state,
      comments : action.data
    }
    default:
      return state
  }
}