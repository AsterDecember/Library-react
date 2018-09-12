import { createStore, applyMiddleware, compose } from 'redux';
import combineReducers from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import logger from 'redux-logger'


const initialState   = {};
const enhancers = [];
const sagaMiddleware = createSagaMiddleware();

const middleware = [
    sagaMiddleware,
    logger
];

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const index = createStore(
    combineReducers,
    initialState,
    composedEnhancers
);
sagaMiddleware.run(rootSaga);
export default index;