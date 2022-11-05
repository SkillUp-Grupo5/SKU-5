import { useDispatch, useSelector } from 'react-redux'

export const useAuthStore = () => {
	const dispatch = useDispatch()
	const { id, email, first_name, last_name, roleId, points, checking } = useSelector((state) => state.auth)

	const StartLogin = async (email, password) => {}

	const startLogout = () => {}

	return {
		//* Properties
		id,
		email,
		first_name,
		last_name,
		roleId,
		points,
		checking,

		//* Metods
		StartLogin,
		startLogout,
	}
}
