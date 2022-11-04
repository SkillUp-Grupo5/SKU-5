import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ children }) => {
	const store = useSelector((state) => state.auth)

	return store.checking ? <Navigate to="/home" /> : children
}
