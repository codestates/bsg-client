import { combineReducers } from 'redux';
import dataReducer from '../reducers/dataReducer'
import userReducer from '../reducers/userReducer'

const rootReducer = combineReducers({
  pageData : dataReducer,
  userData : userReducer
})

export default rootReducer