import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { checkingAuth } from '../store/slices/authSlice'

export const PublicRoute = ({ children }) => {
	const dispatch = useDispatch()

	const store = useSelector((state) => state.auth)

	localStorage.getItem('token') && dispatch(checkingAuth(true))

	return store.checking ? <Navigate to="/home" /> : children
}
