import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
	const store = useSelector((state) => state.auth)

	return store.checking ? children : <Navigate to="/login" />
}
