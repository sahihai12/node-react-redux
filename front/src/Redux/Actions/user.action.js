import axios from 'axios'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_REGISTER_SUCCESS , 
    FETCH_LOGOUT
} from '../constants/user.constant'


export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}
export const fetchUserRegister = bool => {
  return {
    type: FETCH_REGISTER_SUCCESS,
    payload: bool
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}


export const userRegister = formdata => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios
        .post('http://localhost:9090/user/register',
            formdata ,
            {
              headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(response => {
          // const users = response.data
          dispatch(fetchUserRegister(true))
        }).catch(error => {
          dispatch(fetchUsersFailure(error.response.data))
        })
    }
    
}

export const userLogin = formdata => {
  return (dispatch) => {
      dispatch(fetchUsersRequest());
      axios.post('http://localhost:9090/user/login' , formdata)
      .then(response => {
        // response.data is the users
        const users = response.data
        sessionStorage.setItem('user', JSON.stringify(users))
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.response.data))
      })
  }
}

export const logout = () => {
  sessionStorage.removeItem('user')
  return{
    type: FETCH_LOGOUT
  }
}