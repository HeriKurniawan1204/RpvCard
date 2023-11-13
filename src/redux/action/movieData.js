import { reduxDataMovie } from "../../services/GetPopular";
import { setDataMovie } from "../reducers/movie/authMovie";

export const DataMovie = () => (dispatch) => {
  reduxDataMovie()
    .then((result) => {
      dispatch(setDataMovie(result.data.data));
      console.log(result);
    })
    .catch((err) => {});
};
