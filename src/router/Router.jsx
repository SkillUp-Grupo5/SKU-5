import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { LoginPage, RegisterPage } from '../application/auth/pages'
import { DashboardRoute } from './DashboardRoute'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate replace to="/home" />} />

					<Route
						path="/login"
						element={
							<PublicRoute>
								<LoginPage />
							</PublicRoute>
						}
					/>

					<Route
						path="/register"
						element={
							<PublicRoute>
								<RegisterPage />
							</PublicRoute>
						}
					/>

					<Route
						path="/*"
						element={
							<PrivateRoute>
								<DashboardRoute />
							</PrivateRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	)
}
