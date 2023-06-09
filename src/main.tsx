import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/GlobalStyles'
import AppRoutes from './routes'
import theme from './styles/theme'
import store from './redux/store'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './context/AuthContext'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<AuthProvider>
					<GlobalStyle />
					<ToastContainer />
					<AppRoutes />
				</AuthProvider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
)
