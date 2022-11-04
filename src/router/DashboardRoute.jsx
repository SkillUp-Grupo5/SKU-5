import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LayoutPage } from '../application/utils/LayoutPage'

const Home = lazy(() => import('../application/home/pages/Home'))
const Balance = lazy(() => import('../application/balance/pages/Balance'))
// const Bills = lazy(() => import('../modules/Bills/Index'))
const Movements = lazy(() => import('../application/movements/Index'))

export const DashboardRoute = ({ handle }) => {
	return (
		<LayoutPage>
			<Routes>
				<Route
					path="/home"
					element={
						<React.Suspense fallback={<></>}>
							<Home />
						</React.Suspense>
					}
				/>
				<Route path="/bills" element={<React.Suspense fallback={<></>}>{/* <Bills /> */}</React.Suspense>} />
				<Route
					path="/balance"
					element={
						<React.Suspense fallback={<></>}>
							<Balance />
						</React.Suspense>
					}
				/>
				<Route
					path="/movements"
					element={
						<React.Suspense fallback={<></>}>
							<Movements />
						</React.Suspense>
					}
				/>
			</Routes>
			{/* <button onClick={() => handle(false)}>Loggout</button> */}
		</LayoutPage>
	)
}
