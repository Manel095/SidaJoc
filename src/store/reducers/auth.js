import {USER_LOGGED} from '../actions/actionTypes';

const initialState = {
    userLogged: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED:
            return {
                ...state,
                userLogged: true
            };
        default:
            return state;
    }
};

export default reducer;
