import { CALL_API, Schemas } from '../middleware/api'

export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

const fetchUser = login => ({
  [CALL_API]: {
    types: [ USER_REQUEST, USER_SUCCESS, USER_FAILURE ],
    endpoint: `users/${login}`,
    schema: Schemas.USER
  }
})

export const loadUser = (login, requiredFields = []) => (dispatch, getState) => {
  const user = getState().entities.users[login]
  if (user && requiredFields.every(key => user.hasOwnProperty(key))) {
    return null
  }

  return dispatch(fetchUser(login))
}

export const REPOS_REQUEST = 'REPOS_REQUEST'
export const REPOS_SUCCESS = 'REPOS_SUCCESS'
export const REPOS_FAILURE = 'REPOS_FAILURE'

const fetchRepos = (login, nextPageUrl) => ({
  login,
  [CALL_API]: {
    types: [ REPOS_REQUEST, REPOS_SUCCESS, REPOS_FAILURE ],
    endpoint: nextPageUrl,
    schema: Schemas.REPO_ARRAY
  }
})

export const loadRepos = (login, nextPage) => (dispatch, getState) => {
  const {
    nextPageUrl = `search/repositories?q=user:${login}`,
    pageCount = 0,
    perPage = 5
  } = getState().pagination.ownedByUser[login] || {}
  if (pageCount > 0 && !nextPage) {
    return null
  }

  return dispatch(fetchRepos(login, nextPageUrl))
}

export const SEARCHED_REPOS_REQUEST = 'SEARCHED_REPOS_REQUEST'
export const SEARCHED_REPOS_SUCCESS = 'SEARCHED_REPOS_SUCCESS'
export const SEARCHED_REPOS_FAILURE = 'SEARCHED_REPOS_FAILURE'

const fetchSearchedRepos = (login, search, nextPageUrl) => ({
  login,
  search,
  [CALL_API]: {
    types: [ SEARCHED_REPOS_REQUEST, SEARCHED_REPOS_SUCCESS, SEARCHED_REPOS_FAILURE ],
    endpoint: nextPageUrl,
    schema: Schemas.REPO_ARRAY
  }
})

export const searchRepos = (login, search, nextPage) => (dispatch, getState) => {
  const {
    nextPageUrl = `search/repositories?q=user:${login}+${search}`,
    pageCount = 0,
    perPage = 5
  } = getState().pagination.ownedByUser[login] || {}
  if (pageCount > 0 && !nextPage) {
    return null
  }

  return dispatch(fetchSearchedRepos(login, search, nextPageUrl))
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
})
