import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [thunk, logger];

if (process.env.NODE_ENV === "development") {
  //production
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
