import { Navigate } from 'react-router-dom'
import { Navbar } from '../components'

export const PublicRoute = ({ children, logged }) => {
	const routes = [
		{
			name: 'Login',
			link: '/login',
		},
		{
			name: 'Register',
			link: '/register',
		},
	]

	return logged ? <Navigate to="/home" /> : <Navbar routes={routes}>{children}</Navbar>
}
