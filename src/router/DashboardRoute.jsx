import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('../modules/Home/Index'))
const Balance = lazy(() => import('../modules/Balance-charge/Index'))
const BalanceCharge = lazy(() => import('../modules/Balance-charge/Index'))
const Bills = lazy(() => import('../modules/Bills/Index'))
const Movements = lazy(() => import('../modules/Movements/Index'))
const SendMoney = lazy(() => import('../modules/Sending-money/Index'))

export const DashboardRoute = ({ handle }) => {
	return (
		<>
			<Routes>
				<Route
					path="/home"
					element={
						<React.Suspense fallback={<></>}>
							<Home />
						</React.Suspense>
					}
				/>
				<Route
					path="/balance-charge"
					element={
						<React.Suspense fallback={<></>}>
							<BalanceCharge />
						</React.Suspense>
					}
				/>
				<Route
					path="/bills"
					element={
						<React.Suspense fallback={<></>}>
							<Bills />
						</React.Suspense>
					}
				/>
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
				<Route
					path="/sending-of-money"
					element={
						<React.Suspense fallback={<></>}>
							<SendMoney />
						</React.Suspense>
					}
				/>
			</Routes>
			<button onClick={() => handle(false)}>Loggout</button>
		</>
	)
}
