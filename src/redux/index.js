import { applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import rootSaga from "./root.sage";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
