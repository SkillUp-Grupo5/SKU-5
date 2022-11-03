import axios from 'axios'

// I N S T A N C E S
export const axiosClientToken = axios.create({
	baseURL: 'url',
	// baseURL: process.env.REACT_APP_API_URL, // alternative way
})

export const axiosClient = axios.create({
	baseURL: 'url',
	// baseURL: process.env.REACT_APP_API_URL, // alternative way
})

//I N T E R C E P T O R S

//Response
axiosClient.interceptors.response.use(
	(response) => {
		response.data.token && localStorage.setItem('token', response.data.token)
		return response
	},
	(error) => {
		console.log(error)
		return Promise.reject(error)
	}
)

axiosClientToken.interceptors.response.use(
	(response) => {
		console.log(response)
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
		request.headers['access-token'] = `Bearer ${token}`
		return request
	},
	(error) => {
		console.log(error)
		return Promise.reject(error)
	}
)
