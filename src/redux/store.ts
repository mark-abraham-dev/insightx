import { createStore, combineReducers } from "redux";
import { tableReducer } from "./reducers/tableReducers";

const rootReducer = combineReducers({ tableReducer });

const store = createStore(rootReducer);

export default store;
export type AppState = ReturnType<typeof rootReducer>;
