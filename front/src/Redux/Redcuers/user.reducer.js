import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_REGISTER_SUCCESS, FETCH_LOGOUT} from '../constants/user.constant'

const userinfo = JSON.parse(sessionStorage.getItem('user'))

const initialState = {
    loading: false,
    login: false,
    userDeatils: userinfo || [],
    error: []
}


const UserReducer = (state = initialState, action) => {
switch (action.type) {
    case FETCH_USERS_REQUEST:
    return {
        ...state,
        loading: true
    }
    case FETCH_REGISTER_SUCCESS:
        return{
            ...state,
            loading: false,
            login: action.payload
        }
    case FETCH_USERS_SUCCESS:
        return {
            ...state,
            loading: false,
            userDeatils: action.payload,
            login: true,
            error: []
        }
    case FETCH_USERS_FAILURE:
        return {
            ...state,
            loading: false,
            userDeatils: [],
            error: action.payload
        }
    case FETCH_LOGOUT:
        return {
            ...state,
            loading: false,
            userDeatils: [],
            login: false,
            error: []
        }
    default: return state
}
}

export default UserReducer
  