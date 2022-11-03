import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { LoginPage, RegisterPage } from '../application/auth/pages'
import { DashboardRoute } from './DashboardRoute'

import Footer from '../application/utils/Footer'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const Router = () => {
	const [logged, setLogged] = useState(false)
	const handleLogged = (status) => {
		setLogged(status)
	}
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate replace to="/home" />} />

					<Route
						path="/login"
						element={
							<PublicRoute logged={logged}>
								<LoginPage handle={handleLogged} />
							</PublicRoute>
						}
					/>

					<Route
						path="/register"
						element={
							<PublicRoute logged={logged}>
								<RegisterPage handle={handleLogged} />
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
		</>
	)
}
