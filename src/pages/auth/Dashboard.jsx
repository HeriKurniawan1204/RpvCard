import React, { useEffect } from "react";
import { useGetDataUsers } from "../../services/auth/get_user";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/action/authLogin";
import { DataMovie } from "../../redux/action/movieData";

export const Dashboard = () => {
  const Data = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  // const { data: auth } = useGetDataUsers({});
  useEffect(() => {
    dispatch(DataMovie());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex bg-red-600 w-full h-[50px] justify-center items-center">
          Log out disini 👉
          <button
            onClick={() => {
              dispatch(logOut());
            }}
            className="w-cover py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log Out
          </button>
        </div>
        <div className="flex flex-wrap justify-center">
          {Data?.dataMovie?.map((movie) => (
            <div className="relative w-[200px] h-[300px] m-4 rounded-lg overflow-hidden cursor-pointer">
              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-end pb-3 text-white">
                <h3 className="text-center">{movie.title}</h3>
              </div>
              <div className="absolute justify-start text-white flex flex-row items-center top-1 left-1 space-x-2 bg-red-500 px-[8px] rounded-md">
                <h6 className="text-[15px]">{movie.vote_average}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
