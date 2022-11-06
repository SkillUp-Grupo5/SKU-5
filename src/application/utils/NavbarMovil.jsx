import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

import HomeIcon from '@mui/icons-material/Home'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import SwapVertIcon from '@mui/icons-material/SwapVert'
import GroupIcon from '@mui/icons-material/Group'
import { Link } from 'react-router-dom'

export const NavbarMovil = () => {
	const [value, setValue] = React.useState(0)

	const routes = [
		{
			name: 'Inicio',
			link: '/home',
			icon: <HomeIcon />,
		},
		{
			name: 'Balance',
			link: '/balance',
			icon: <AccountBalanceWalletIcon />,
		},
		{
			name: 'Movimientos',
			link: '/movements',
			icon: <SwapVertIcon />,
		},
		{
			name: 'Usuarios',
			link: '/users',
			icon: <GroupIcon />,
		},
	]

	return (
		<Box sx={{ width: '100%', position: 'absolute', bottom: '-27vh' }}>
			<BottomNavigation
				sx={{ backgroundColor: '#1976D2' }}
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue)
				}}
			>
				{routes.map((r) => {
					return (
						<Link to={r.link}>
							<BottomNavigationAction sx={{ color: '#fff' }} label={r.name} icon={r.icon} />
						</Link>
					)
				})}
			</BottomNavigation>
		</Box>
	)
}
