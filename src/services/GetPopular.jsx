import { API_ENDPOINT } from "../utils/api-endpoint";
import http2 from "../utils/http2";

export const reduxDataMovie = async () => {
  return await http2.get(API_ENDPOINT.GET_POPULAR);
};

// const fetchDataPopular = async ({ queryKey }) => {
//   const [_key, _params] = queryKey;

//   const { data } = await http.get(_key, { params: _params });
//   return data;
// };

// const useDataQueryPopular = (options) => {
//   return useQuery([API_ENDPOINT.GET_POPULAR, options], fetchDataPopular);
// };

// export { fetchDataPopular, useDataQueryPopular };
