import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import {fetchAllElements,LOAD_ALL_ELEMENTS} from "../actions/allElements";
import {CREATE_ELEMENT} from "../actions/allElements";

//setting up, just a small test
const apiUrl   = process.env.REACT_APP_API_URL;
const apiKey   = process.env.REACT_APP_API_KEY;
const apiUrlDB = process.env.REACT_APP_API_URL_DB_CREATE;

// Helper function, convert array to object.
const arrayToObj = (arr) => {
    const obj = {};
    arr.forEach((gif) => {
        obj[gif.id] = gif;
    });
    return obj;
};

//using axios fot http post
export const axiosPost = (data) => {
    return axios.post(apiUrlDB,{
        id: 11,
        name: 'pruebaAxios'
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
            console.log('error axios');
        });
}

//using axios for http get
export const axiosGet = (url) => {
    return axios.get(url)
        .then((response) => response)
};

//send Data to db api
function* createElement(action){
    try {
        const data = {
            url:     apiUrlDB,
            element: action
        };
        yield call(axiosPost,data);

    } catch (e) {
        console.log(e);
    }
}

//getting all data using axios on fetch function
function* getAllElements() {
    try {
        const url = `${apiUrl}/gifs/trending?api_key=${apiKey}&limit=10`;
        const {data} = yield call(axiosGet,url);
        const elementPost = arrayToObj(data.data || []);
        yield put(fetchAllElements({elementPost}));

    } catch (e) {
        console.log(e);
    }
}

//Wait to load all elements
function* loadAllElements(){
    yield takeEvery(LOAD_ALL_ELEMENTS,getAllElements);
}
//wait for create element
function* postElement(){
    yield takeEvery(CREATE_ELEMENT,createElement);
}
function* rootSaga() {
    yield all([
        loadAllElements(),
        postElement()
    ]);
}

export default rootSaga;