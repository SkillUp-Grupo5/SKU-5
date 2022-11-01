import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from '../components'
import { Login } from '../modules/Auth/Login/Index'
import { Register } from '../modules/Auth/Register/Index'
import { DashboardRoute } from './DashboardRoute'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const Router = () => {
	const [logged, setLogged] = useState(false)
	const handleLogged = (status) => {
		setLogged(status)
	}

	console.log(logged)
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate replace to="/home" />} />

					<Route
						path="/login"
						element={
							<PublicRoute logged={logged}>
								<Login handle={handleLogged} />
							</PublicRoute>
						}
					/>

					<Route
						path="/register"
						element={
							<PublicRoute logged={logged}>
								<Register />
							</PublicRoute>
						}
					/>

					<Route
						path="/*"
						element={
							<PrivateRoute logged={logged}>
								<DashboardRoute handle={handleLogged} />
							</PrivateRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	)
}
