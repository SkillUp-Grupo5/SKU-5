import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import { Box, Button, Grid, Link, TextField } from '@mui/material';
import { useFormik } from 'formik';

import Title from '../../utils/Title';
import { YupLoginValidations } from '../../../helpers';
import { useAuthStore } from '../../../hooks';

export const LoginPage = () => {
  const { StartLogin } = useAuthStore();

  const formik = useFormik({
    initialValues: {
      email: 'testjabb@test.com',
      password: '123456789',
    },

    validationSchema: YupLoginValidations,
    onSubmit: async (values, { resetForm }) => {
      StartLogin(values);
      resetForm();
    },
  });

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
      >
        <Box
          width="100%"
          minHeight="40vh"
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
        <Box
          component="form"
          sx={{ mt: 3, width: '90%' }}
          onSubmit={formik.handleSubmit}
        >
          <Grid
            container
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <Grid item sx={{ width: { xs: '100%', sm: '50%', md: '30%' } }}>
              <TextField
                // required

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
            <Grid item sx={{ width: { xs: '100%', sm: '50%', md: '30%' } }}>
              <TextField
                // required
                fullWidth
                name="password"
                label="password"
                type="password"
                id="password"
                autoComplete="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  mb: 2,
                  backgroundColor: '#2AE3C8',
                  ':hover': {
                    backgroundColor: '#00DFC0',
                  },
                }}
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <Link as={LinkRouter} to="/register" variant="body2">
                <Title
                  variant="h4"
                  color="#1976D2"
                  text="No tienes una cuenta?"
                />
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
    // <form onSubmit={handleSubmit}>
    // 	<input name="email" type="email" placeholder="email" onChange={(e) => handleOnchange(e)} value={form.email} />
    // 	<input name="password" type="password" placeholder="password" onChange={(e) => handleOnchange(e)} value={form.password} />
    // 	<button type="submit">Login</button>
    // </form>
  );
};
