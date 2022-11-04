import { axiosClient, axiosClientToken } from '../helpers'

export const LoginService = (data) => {
	return axiosClient.post('/auth/login', data)
}

export const RegisterService = (data) => {
	return axiosClient.post('/users', data)
}

export const RecuperarDatosUser = () => {
	return axiosClientToken.get('/auth/me')
}
