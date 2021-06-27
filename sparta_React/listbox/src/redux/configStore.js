import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import bucket from "./modules/bucket";
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({bucket});
// const rootReducer = combineReducers({bucket, a, b, c, ...})

const store = createStore(rootReducer, enhancer);

export default store