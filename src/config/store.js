import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import mySaga from '../sagas';
import reducer from '../reducers';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(mySaga);

export { store };