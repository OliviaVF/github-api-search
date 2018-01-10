import union from 'lodash/union';

// Creates a reducer managing search, given the action types to handle,
// and a function telling how to extract the key from an action.
const search = ({ types, mapActionToKey }) => {
    const [ requestType, successType, failureType ] = types;

    const updateRepoResults = (state = {
        isFetching: false,
        ids: []
    }, action) => {
        switch (action.type) {
            case requestType:
                return {
                    ...state,
                    isFetching: true
                };
            case successType:
                return {
                    ...state,
                    isFetching: false,
                    ids: union(action.response.result),
                };
            case failureType:
                return {
                    ...state,
                    isFetching: false
                };
            default:
                return state;
        }
    };

    return (state = {}, action) => {
    // Update search by key
        switch (action.type) {
            case requestType:
            case successType:
            case failureType:
                const key = mapActionToKey(action);
                if (typeof key !== 'string') {
                    throw new Error('Expected key to be a string.');
                }
                return {
                    ...state,
                    [key]: updateRepoResults(state[key], action)
                };
            default:
                return state;
        }
    };
};

export default search;
