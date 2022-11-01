import axios from 'axios';


const walletApi = axios.create({
    baseURL: 'url'
});

// Todo: configurar interceptores
walletApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        // 'x-token': localStorage.getItem('token') // Aca colocariamos el token
    }

    return config;
})

export default walletApi;



