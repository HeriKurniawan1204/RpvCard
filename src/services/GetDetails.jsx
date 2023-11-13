import { useQuery } from "@tanstack/react-query";
import http from "../utils/Http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const fetchDataDetails = async ({ queryKey }) => {
  const [_key, _params] = queryKey;

  const { data } = await http.get(_key + _params.movie_id );
  return data;
};

const useDataQueryDetails = (options) => {
  return useQuery([API_ENDPOINT.GET_DETAILS, options], fetchDataDetails);
};

export { fetchDataDetails, useDataQueryDetails };
