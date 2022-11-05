import { axiosClientToken } from '../helpers'

export const addDeposit = async (data) => {
	try {
		const deposit = await axiosClientToken.post('/transactions', { ...data })
		return deposit
	} catch (error) {
		console.log(error)
	}
}

export const deleteDeposit = async () => {
	try {
		const deposit = await axiosClientToken.delete(`/transactions/${286}`)
		return deposit
	} catch (error) {
		console.log(error)
	}
}
export const showDeposits = async () => {
	try {
		const { data } = await axiosClientToken.get('/transactions')
		const res = data.data.map((e) => ({ amount: e.amount, type: e.type }))
		const charges = res
			.filter((e) => e.type == 'topup')
			.map((e) => Number(e.amount))
			.reduce((a, b) => a + b, 0)
		const expenses = res
			.filter((e) => e.type == 'payload')
			.map((e) => Number(e.amount))
			.reduce((a, b) => a + b, 0)

		return { charges, expenses }
	} catch (error) {
		console.log(error)
	}
}
