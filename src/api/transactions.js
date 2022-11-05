import { axiosClientToken } from '../helpers'

export const getAllTransactionsService = async () => {
	try {
		const { data } = await axiosClientToken.get('/transactions')
		return data
	} catch (error) {
		console.log(error)
	}
}
