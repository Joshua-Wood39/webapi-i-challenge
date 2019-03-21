import axios from 'axios';

export const GET_LIST = "GET_LIST";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAIL = "GET_FAIL";


export const getList = () => dispatch => {
    dispatch({ type: GET_LIST })
    axios
        .get('http://localhost:4000/api/users')
        .then(res => {
            dispatch({ type: GET_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_FAIL, payload: err.message })
        })
}