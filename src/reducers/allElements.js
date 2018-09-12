import {FETCH_ALL_ELEMENTS} from "../actions/allElements";

const allElements = (state = {}, action) => {
    //manage the action type
    switch (action.type) {
        case FETCH_ALL_ELEMENTS:
            const { elements } = action.payload;
            return {...state,...elements};
        default:
            return state;
    }
}

export default allElements;