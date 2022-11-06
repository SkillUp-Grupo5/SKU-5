import { axiosClient, axiosClientToken } from "../helpers";
import Swal from 'sweetalert2';


export const startGetUsers = async (page = 1) => {
  try {
    const data = await axiosClientToken.get(`/users/?page=${page}`);

    const users = data.data.data;

    return {
      users,
      nextPage: data.data.nextPage,
      previousPage: data.data.previousPage,
    };
  } catch (error) {
    console.log(error);
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Role administrador requerido',
      text: error.response.data.error,
      showConfirmButton: false,
      timer: 2000,
    })
  }
};

export const startSendMoney = async (transaction, id) => {
  try {
    
    const data = await axiosClientToken.post(`/accounts/${id}`, transaction);

    if(data?.data?.message === 'OK') {
      Swal.fire({
        position: 'center',
        icon: 'success',
        text: 'Envio de dinero exitoso!',
        showConfirmButton: false,
        timer: 2000,
      })
    }
  } catch (error) {
    console.log(error);
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error al enviar dinero',
      text: error.response.data.error,
      showConfirmButton: false,
      timer: 2000,
    })
  }
};
