import { Box } from '@mui/system'
import React from 'react'
import Footer from './Footer'
import { Navbar } from './Navbar'

export const LayoutPage = ({ children }) => {
	return (
		<Box minWidth="100vh" bgcolor="#fff">
			<Navbar>{children}</Navbar>
			<Footer />
		</Box>
	)
}
