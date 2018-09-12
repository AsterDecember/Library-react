import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import {fetchAllElements,LOAD_ALL_ELEMENTS} from "../actions/allElements";

//setting up, just a small test
const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

//using axios for http get
export const fetchElements = () => {
    return axios.get(url)
        .then((response) => response)
};

//getting all data using axios on fetch function
function getAllElements() {
    try {
        const url = `${apiUrl}/gifs/trending?api_key=${apiKey}&limit=10`;
        const {data} = yield call(fetchGifs,url);
        const gifs = arrayToObj(data.data || []);
        yield put(fetchAllElements({data}));

    } catch (e) {
        console.log(e);
    }

}