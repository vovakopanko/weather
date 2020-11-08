import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
window.__store__ = store;

export default store;
