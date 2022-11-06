import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";

import { axiosClient, axiosClientToken } from "../helpers";

import { authLogin, authLogout } from "../store/slices/authSlice";

/**
 * On this useHook you can put http requests and once you get
 * data you want then you can put that data on the store of the app.
 */
export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { id, email, first_name, last_name, roleId, points, checking } =
    useSelector((state) => state.auth);

  const StartLogin = async (data) => {
    const localToken = localStorage.getItem("token");

    /**
     * If the localToken exist on localStorage we get the user data
     * from the API.
     */
    if (localToken) {
      try {
        const newData = await axiosClientToken.get("/auth/me");

        /**
         * Send the user data to the store
         */
        dispatch(authLogin(newData.data));
      } catch (error) {
        return console.log(error);
      }
    } else {
      /**
       * If the localToken doesn't exist then we send the credentials
       * to the API which give us an accessToken.
       */
      try {
        const {
          data: { accessToken },
        } = await axiosClient.post("/auth/login", data);

        /**
         * Once we have the accesToken then we get the user data fron
         * the API.
         */
        if (accessToken) {
          const newData = await axiosClientToken.get("/auth/me");

          /**
           * Send the user data to the store
           */
          dispatch(authLogin(newData.data));

          Swal.fire({
            position: "center",
            icon: "success",
            text: "Inicio de sesión exitoso!",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error al iniciar sesión",
          text: error.response.data.error,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };

  const StartRegister = async (data) => {
    /**
     * First we create an account
     */
    try {
      const newData = await axiosClient.post("/users", {
        ...data,
        roleId: 2,
        points: 10000,
      });

      /**
       * If the account has succeffully created then we login the user,
       * this step is important because the endpoint to create an account
       * doesn't send a token to keep the session open as the login endpoint does.
       */
      if (newData.status === 201) {
        StartLogin(data);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error al iniciar sesión",
        text: error.response.data.error,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const StartLogout = () => {
    dispatch(authLogout());

    Swal.fire({
      position: "center",
      icon: "success",
      text: "Cierre de sesión exitoso!",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return {
    /**
     * Values of authSlice
     */
    id,
    email,
    first_name,
    last_name,
    roleId,
    points,
    checking,

    /**
     * Functions AUTH
     */
    StartLogin,
    StartRegister,
    StartLogout,
  };
};
