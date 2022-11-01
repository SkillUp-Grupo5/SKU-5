import { Navigate } from 'react-router-dom'
import { Navbar } from '../components'

export const PrivateRoute = ({ children, logged }) => {
	const routes = [
		{
			name: 'Inicio',
			link: '/home',
		},
		{
			name: 'Carga de saldo',
			link: '/balance-charge',
		},
		{
			name: 'Gastos',
			link: '/bills',
		},
		{
			name: 'Balance',
			link: '/balance',
		},
		{
			name: 'Movimientos',
			link: '/movements',
		},
		{
			name: 'Envio de dinero',
			link: '/sending-of-money',
		},
	]

	return logged ? <Navbar routes={routes}>{children}</Navbar> : <Navigate to="/login" />
}
