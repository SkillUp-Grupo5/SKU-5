import { Box } from '@mui/system'
import React from 'react'
import Footer from './Footer'
import { Navbar } from './Navbar'

export const LayoutPage = ({ children }) => {
<<<<<<< HEAD
  return (
    <Box minWidth="100vh" bgcolor="#fff">
      {children}
    </Box>
  );
};
=======
	return (
		<Box minWidth="100vh" bgcolor="#fff">
			<Navbar>{children}</Navbar>
			<Footer />
		</Box>
	)
}
>>>>>>> 1187c67d95e5a7c817b9a0af41dcb9649a624a82
