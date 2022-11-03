import React, { useState } from 'react'

import { Avatar, Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { LayoutPage } from '../../utils'
import { Link as LinkRouter } from 'react-router-dom'
import Title from '../../utils/Title'

export const LoginPage = ({ handle }) => {
	return (
		<Box
			container
			width="100%"
			height="100vh"
			display="flex"
			justifyContent="center"
			alignItems="center"
			sx={{
				position: 'absolute',
				left: 0,
				top: 0,
				backgroundColor: '#2c3338',
				'& .MuiFormLabel-root': {
					color: 'gray',
					':hover': {
						color: 'gray',
						borderColor: 'none',
					},
				},
				'& .MuiOutlinedInput-root': {
					color: '#eee',
					borderColor: 'none',
					backgroundColor: '#3b4148',
					':hover': {
						borderColor: 'none',
						background: '#434a52',
					},
				},
			}}
		>
			<Box width="90%" height="70%" display="flex" flexDirection="column" alignItems="center">
				<Box
					width="100%"
					maxHeight="30vh"
					display="flex"
					alignItems="center"
					justifyContent="center"
					sx={{
						'& img': {
							maxWidth: '30ch',
							objectFit: 'cover',
							objectPosition: '20% 10%',
							borderRadius: '50%',
						},
						mb: 2,
					}}
				>
					<img
						src="https://res.cloudinary.com/the-kings-company/image/upload/v1663785540/dashboard-ecommerce-app/assets/3515462_rw5fkz.jpg"
						alt=""
					/>
				</Box>
				<Box component="form" sx={{ mt: 3, width: '50%' }}>
					<Grid container display="flex" alignItems="center" justifyContent="center" spacing={2}>
						<Grid item xs={8}>
							<TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
						</Grid>
						<Grid item xs={8}>
							<TextField
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="new-password"
							/>
						</Grid>
						<Grid item xs={8}>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{
									mt: 3,
									mb: 2,
									backgroundColor: '#ea4c88',
									':hover': {
										backgroundColor: '#d44179',
									},
								}}
								onClick={() => handle(true)}
							>
								Sign In
							</Button>
						</Grid>
					</Grid>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link as={LinkRouter} to="/register" variant="body2">
								<Title variant="h4" color="#1976D2" text="No tienes una cuenta?" />
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Box>
	)
}
