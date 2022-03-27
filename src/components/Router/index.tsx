import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { routes } from './routes'
import { useAppSelector } from 'hooks/useAppSelector'

interface RouterProps {
	children: ReactElement | ReactElement[]
}

const { main: mainRoute, other: otherRoutes } = routes

export const Router: React.FC<RouterProps> = ({ children }) => {
	const isAuth = useAppSelector(state => state.landing.isAuth)

	return (
		<BrowserRouter>
			<Routes>
				{!isAuth ? (
					<>
						<Route path='/' element={<Navigate to='/login' replace />} />
						<Route
							path='/anime-library'
							element={<Navigate to='/login' replace />}
						>
							<Route path=':anime' element={<Navigate to='/login' replace />} />
						</Route>
					</>
				) : (
					<>
						<Route path='/login' element={<Navigate to='/' replace />} />
						<Route path='/registration' element={<Navigate to='/' replace />} />
						<Route
							path='/restore-password'
							element={<Navigate to='/' replace />}
						/>
					</>
				)}
				<Route key={mainRoute.key} path={mainRoute.route} element={children} />
				{otherRoutes.map(route => {
					const { component: Component } = route
					return (
						<>
							{route.children ? (
								<Route
									key={route.key}
									path={route.route}
									element={<Component />}
								>
									<Route
										path={route.children.route}
										element={<route.children.component />}
									/>
								</Route>
							) : (
								<Route
									key={route.key}
									path={route.route}
									element={<Component />}
								/>
							)}
						</>
					)
				})}
			</Routes>
		</BrowserRouter>
	)
}
