import { combineReducers } from "redux";

import MovieReducer from "./movies/movieReducer";

const rootReducer = combineReducers({
  Movie: MovieReducer,
});

export default rootReducer;
