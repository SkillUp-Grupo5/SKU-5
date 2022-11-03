import { useDispatch, useSelector } from 'react-redux';



export const useAuthStore = () => {

    const dispatch = useDispatch();
    const { checking, uid, name } = useSelector(state => state.auth);


    const StartLogin = async (email, password) => {

    }

    const startLogout = () => {


    }


    return {
        //* Properties
        checking,
        uid,
        name,

        //* Metods
        StartLogin,
        startLogout,
    }
}
