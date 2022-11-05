import { useDispatch, useSelector } from "react-redux";
import { axiosClient, axiosClientToken } from "../helpers";
import { authLogin } from "../store/slices/authSlice";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { id, email, first_name, last_name, roleId, points, checking } =
    useSelector((state) => state.auth);

  const StartLogin = async (data) => {
    const localToken = localStorage.getItem("token");

    try {
      if (localToken) {
        const newData = await axiosClientToken.get("/auth/me");

        dispatch(authLogin(newData.data));
      } else {
        const {
          data: { accessToken },
        } = await axiosClient.post("/auth/login", data);

        if (accessToken) {
          const newData = await axiosClientToken.get("/auth/me");

          dispatch(authLogin(newData.data));
        } 
      }
    } catch (error) {
      return console.log(error);
    }
  };

  const startLogout = () => {};

  return {
    //* Properties
    id,
    email,
    first_name,
    last_name,
    roleId,
    points,
    checking,

    //* Metods
    StartLogin,
    startLogout,
  };
};
