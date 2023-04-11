import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Spinner } from '../components/Spinner'

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
	const isAuthenticated = localStorage.getItem('username')

	return (
		<Router>
			<Suspense
				fallback={
					<div
						style={{
							width: '100%',
							height: '100vh',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Spinner />
					</div>
				}
			>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					{isAuthenticated ? (
						<Route
							path='*'
							element={
								<Navigate
									to='/posts'
									replace
								/>
							}
						/>
					) : (
						<Route
							path='*'
							element={
								<Navigate
									to='/'
									replace
								/>
							}
						/>
					)}

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
