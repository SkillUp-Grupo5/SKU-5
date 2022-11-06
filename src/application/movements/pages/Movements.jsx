import { useState, useEffect } from 'react'

import { axiosClientToken } from '../../../helpers'

import { DataGrid } from '@mui/x-data-grid'
import { Typography } from '@mui/material'

const columns = [
	{ field: 'concept', headerName: 'Concepto', width: 330 },
	{ field: 'type', headerName: 'Cargo/Pago', width: 330 },
	{ field: 'amount', headerName: 'Monto', width: 330 },
	{ field: 'createdAt', headerName: 'Fecha', width: 330 },
]

export default function DataTable() {
	const [transactions, setTransactions] = useState([])
	const getTransactions = async () => {
		try {
			const {
				data: { data },
			} = await axiosClientToken.get('/transactions')
			setTransactions(data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getTransactions()
	}, [])

	return (
		<div style={{ height: '100vh', width: '100%', margin: '0 auto 4rem 2rem', padding: '0 5rem' }}>
			<Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
				Transacciones
			</Typography>
			<DataGrid rows={transactions} columns={columns} pageSize={10} rowsPerPageOptions={[5, 10, 25]} checkboxSelection />
		</div>
	)
}
