import { axiosClient } from '../helpers/axiosHelper'

const user = {
	email: 'admin@example.com',
	password: '123456',
}

export const LoginService = (data) => {
	axiosClient.post('/auth/login', data)
}
