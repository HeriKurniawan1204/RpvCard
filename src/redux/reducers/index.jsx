import { combineReducers } from "redux";
import authLoginSlicer from "./auth/authLoginSlicer";
import authMovie from "./movie/authMovie";

export default combineReducers({
  auth: authLoginSlicer,
  movie: authMovie,
  // rating: authRatingSlice,
});
