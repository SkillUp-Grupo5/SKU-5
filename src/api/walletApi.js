/** Libraries */
import axios from 'axios';

const walletApi = axios.create({
    baseURL: 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com'
});


// Todo: configurar interceptores
walletApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        // eslint-disable-next-line
        ['Authorization']: `Bearer ${localStorage.getItem('token')}`
    }

    return config;
})

export default walletApi;



