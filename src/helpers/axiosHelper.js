import axios from 'axios'

// I N S T A N C E S
export const axiosClientToken = axios.create({
	baseURL: 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com',
})

export const axiosClient = axios.create({
	baseURL: 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com',
})

//I N T E R C E P T O R S

//Response
axiosClient.interceptors.response.use(
	(response) => {
		response.data.accessToken && localStorage.setItem('token', response.data.accessToken)
		return response
	},
	(error) => {
		console.log(error)
		return Promise.reject(error)
	}
)

axiosClientToken.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		console.log(error)
		return Promise.reject(error)
	}
)

//Request

axiosClientToken.interceptors.request.use(
	(request) => {
		const token = localStorage.getItem('token')
		request.headers['Authorization'] = `Bearer ${token}`
		return request
	},
	(error) => {
		console.log(error)
		return Promise.reject(error)
	}
)
