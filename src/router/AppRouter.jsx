import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress'
import { useAuthStore } from '../hooks'

import { LoginPage, RegisterPage } from '../application/auth/pages'
import { DashboardRoute } from './DashboardRoute'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

/**
 * In this component we manage the routes of our application 
 * in relation to the views and we put the access middlewares.
 */
export const AppRouter = () => {

	const { id, checking, StartChecking } = useAuthStore();

	/**
	 * We initialized the checking of user using the accessToken if
	 * that token exist.
	 */
	useEffect(() => {
		StartChecking()
	}, []);

	/**
	 * While the checking process is carried out, we don't return nothing.
	 */
	if (checking) return;

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate replace to="/home" />} />

					<Route
						path="/login"
						element={
							<PublicRoute isAutenticated={!!id}>
								<LoginPage />
							</PublicRoute>
						}
					/>

					<Route
						path="/register"
						element={
							<PublicRoute isAutenticated={!!id}>
								<RegisterPage />
							</PublicRoute>
						}
					/>

					<Route
						path="/*"
						element={
							<PrivateRoute isAutenticated={!!id}>
								<DashboardRoute />
							</PrivateRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	)
}
