import React, { lazy, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LayoutPage } from '../application/utils/LayoutPage'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'


const Home = lazy(() => import('../application/home/pages/Home'))
const Balance = lazy(() => import('../application/balance/pages/Balance'))
const Movements = lazy(() => import('../application/movements/pages/Movements'))
const UsersPage = lazy(() => import('../application/users/pages/UsersPage'))

export const DashboardRoute = () => {

	return (
		<LayoutPage>
			<Routes>
				<Route
					path="/home"
					element={
						<React.Suspense
							fallback={
								<Box sx={{ display: 'flex', justifyContent: 'center' }}>
									<CircularProgress />
								</Box>
							}
						>
							<Home />
						</React.Suspense>
					}
				/>
				<Route
					path="/balance"
					element={
						<React.Suspense
							fallback={
								<Box sx={{ display: 'flex', justifyContent: 'center' }}>
									<CircularProgress />
								</Box>
							}
						>
							<Balance />
						</React.Suspense>
					}
				/>
				<Route
					path="/movements"
					element={
						<React.Suspense
							fallback={
								<Box sx={{ display: 'flex', justifyContent: 'center' }}>
									<CircularProgress />
								</Box>
							}
						>
							<Movements />
						</React.Suspense>
					}
				/>

				<Route
					path="/users"
					element={
						<React.Suspense
							fallback={
								<Box sx={{ display: 'flex', justifyContent: 'center' }}>
									<CircularProgress />
								</Box>
							}
						>
							<UsersPage />
						</React.Suspense>
					}
				/>
			</Routes>
		</LayoutPage>
	)
}
