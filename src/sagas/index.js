import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import {fetchAllElements,LOAD_ALL_ELEMENTS} from "../actions/allElements";

//setting up, just a small test
const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

// Helper function, convert array to object.
const arrayToObj = (arr) => {
    const obj = {};
    arr.forEach((gif) => {
        obj[gif.id] = gif;
    });
    return obj;
};

//using axios for http get
export const fetchElements = (url) => {
    return axios.get(url)
        .then((response) => response)
};

//getting all data using axios on fetch function
function* getAllElements() {
    try {
        const url = `${apiUrl}/gifs/trending?api_key=${apiKey}&limit=10`;
        const {data} = yield call(fetchElements,url);
        const elementPost = arrayToObj(data.data || []);
        yield put(fetchAllElements({elementPost}));

    } catch (e) {
        console.log(e);
    }
}

//Wait to load all gifs
function* loadAllElements(){
    yield takeEvery(LOAD_ALL_ELEMENTS,getAllElements);
}

function* rootSaga() {
    yield all([
        loadAllElements(),
    ]);
}

export default rootSaga;