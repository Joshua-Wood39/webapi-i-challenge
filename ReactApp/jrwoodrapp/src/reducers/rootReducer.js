import {
    GET_LIST,
    GET_SUCCESS,
    GET_FAIL
} from '../actions/index';
import { isNull } from 'util';

const initialState = {
    lordList: [],
    fetchingList: false,
    error: null
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST:
            return {
                ...state,
                fetchingList: true,
                error: ''
            }

        case GET_SUCCESS:
            return {
                ...state,
                fetchingList: false,
                error:'',
                lordList: action.payload
            }

        case GET_FAIL:
            return {
                ...state,
                fetchingList: false,
                error: action.payload
            }
        
        default: return state;
    }
}


export default rootReducer;