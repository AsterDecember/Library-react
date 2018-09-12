//Export Action types:
export const LOAD_ALL_ELEMENTS = 'LOAD_ALL_ELEMENTS';
export const FETCH_ALL_ELEMENTS = 'FETCH_ALL_ELEMENTS';

//Action creators

export const loadAllElements = (payload) => ({
    type : LOAD_ALL_ELEMENTS,
    payload
})

export const fetchAllElements = (payload) => ({
    type : FETCH_ALL_ELEMENTS,
    payload
})