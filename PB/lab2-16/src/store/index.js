import { createStore, applyMiddleware } from "redux";
import ReduxThank from "redux-thunk";

import reducer from "../reducer";

const store = createStore(reducer, applyMiddleware(ReduxThank));

export default store;
