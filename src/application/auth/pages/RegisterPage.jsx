import { Box, Button, Grid, Link, TextField } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'
import Title from '../../utils/Title'
import { useFormik } from 'formik'
import { YupRegisterValidations } from '../../../helpers'
import { useState } from 'react'
import { RegisterService } from '../../../api/auth'

export const RegisterPage = () => {
	const [form, setForm] = useState({})

	const formik = useFormik({
		initialValues: {
			first_name: '',
			last_name: '',
			email: '',
			password: '',
		},

		validationSchema: YupRegisterValidations,
		onSubmit: async (values, { resetForm }) => {
			try {
				const {
					data: { data },
				} = await RegisterService(form)
				console.log(data)
			} catch (error) {
				console.log(error)
			}
			setForm(values)
			resetForm()
		},
	})
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

				<Box component="form" sx={{ mt: 3, width: '60%' }} onSubmit={formik.handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete="given-name"
								name="first_name"
								required
								fullWidth
								id="firstName"
								label="First Name"
								autoFocus
								value={formik.values.first_name}
								onChange={formik.handleChange}
								error={formik.touched.first_name && Boolean(formik.errors.first_name)}
								helperText={formik.touched.first_name && formik.errors.first_name}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id="lastName"
								label="Last Name"
								name="last_name"
								autoComplete="family-name"
								value={formik.values.last_name}
								onChange={formik.handleChange}
								error={formik.touched.last_name && Boolean(formik.errors.last_name)}
								helperText={formik.touched.last_name && formik.errors.last_name}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								value={formik.values.email}
								onChange={formik.handleChange}
								error={formik.touched.email && Boolean(formik.errors.email)}
								helperText={formik.touched.email && formik.errors.email}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="new-password"
								value={formik.values.password}
								onChange={formik.handleChange}
								error={formik.touched.password && Boolean(formik.errors.password)}
								helperText={formik.touched.password && formik.errors.password}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{
							mt: 3,
							mb: 2,
							backgroundColor: '#2AE3C8',
							':hover': {
								backgroundColor: '#00DFC0',
							},
						}}
					>
						Sign Up
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link as={LinkRouter} to="/login" variant="body2">
								<Title variant="h4" color="#1976D2" text="Ya tienes una cuenta?" />
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Box>
	)
}
