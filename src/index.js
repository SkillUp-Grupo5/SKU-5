/** Libraries */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

/** Routes */
import { AppRouter } from './router/AppRouter'

/** Store */
import { store } from './store'

/** Styles */
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<AppRouter />
		</Provider>
	</React.StrictMode>
)
