import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

const Home = lazy(() => import('../pages'))
const Posts = lazy(() => import('../pages/Posts'))

const PrivateRoute = ({ children }: any) => {
	const isAuthenticated = localStorage.getItem('username')

	if (!isAuthenticated) {
		return (
			<Navigate
				to='/'
				replace
			/>
		)
	}

	return children
}

function AppRoutes() {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>

					<Route
						path='*'
						element={<Home />}
					/>

					<Route
						path='/posts'
						element={
							<PrivateRoute>
								<Posts />
							</PrivateRoute>
						}
					/>
				</Routes>
			</Suspense>
		</Router>
	)
}

export default AppRoutes
