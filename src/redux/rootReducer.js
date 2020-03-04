import { combineReducers } from "redux";
import repositorieReducer from "./repositories/repositories.reducer";

const rootReducer = combineReducers({
  repositories: repositorieReducer
});

export default rootReducer;
