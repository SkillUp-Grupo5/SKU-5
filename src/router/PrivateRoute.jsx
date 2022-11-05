import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { checkingAuth } from '../store/slices/authSlice'

export const PrivateRoute = ({ children }) => {
	const dispatch = useDispatch()
	const store = useSelector((state) => state.auth)

	localStorage.getItem('token') && dispatch(checkingAuth(true))

	return store.checking ? children : <Navigate to="/login" />
}
