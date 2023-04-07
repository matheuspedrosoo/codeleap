import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/GlobalStyles'
import AppRoutes from './routes'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<AuthProvider>
				<GlobalStyle />
				<AppRoutes />
			</AuthProvider>
		</ThemeProvider>
	</React.StrictMode>
)
