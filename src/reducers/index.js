import merge from 'lodash/merge'
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form';

import * as ActionTypes from '../actions'
import paginate from './paginate'
import search from './search'

// Updates an entity cache in response to any action with response.entities.
const entities = (state = { users: {}, repos: {} }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }
  return state
}

// Updates the pagination data for different actions.
const pagination = combineReducers({
  ownedByUser: paginate({
    mapActionToKey: action => action.login,
    types: [
      ActionTypes.REPOS_REQUEST,
      ActionTypes.REPOS_SUCCESS,
      ActionTypes.REPOS_FAILURE
    ]
  }),
})

const searched = combineReducers({
  searchFormSelectors: search({
    mapActionToKey: action => action.login,
    types: [
      ActionTypes.SEARCHED_REPOS_REQUEST,
      ActionTypes.SEARCHED_REPOS_SUCCESS,
      ActionTypes.SEARCHED_REPOS_FAILURE
    ]
  }),
})

const rootReducer = combineReducers({
  form,
  entities,
  pagination,
  searched
})

export default rootReducer
