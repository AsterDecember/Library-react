import {CREATE_ELEMENT, FETCH_ALL_ELEMENTS} from "../actions/allElements";

const allElements = (state = {}, action) => {
    //manage the action type
    switch (action.type) {
        case FETCH_ALL_ELEMENTS:
            console.log('fetch');
            const { elementPost } = action.payload;
            return {...state,...elementPost};
        case CREATE_ELEMENT:
            console.log('creado');
            const { elementCreated } = action.payload;
            return {...state,...elementCreated};
        default:
            return state;
    }
}

export default allElements;