import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducers from '../reducers';
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