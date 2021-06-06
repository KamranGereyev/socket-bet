import constants from '../../constants';

const initialState = {
    result: "",
}

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_DATA:
            return {
                ...state,
                result: action.payload
            }    
            default:
                 return state;
    }
}