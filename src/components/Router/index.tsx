import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from './routes'

interface RouterProps {
	children: ReactElement | ReactElement[]
}

const { main: mainRoute, other: otherRoutes } = routes

export const Router: React.FC<RouterProps> = ({ children }) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route key={mainRoute.key} path={mainRoute.route} element={children} />
				{otherRoutes.map(route => {
					const { component: Component } = route
					return (
						<Route key={route.key} path={route.route} element={<Component />} />
					)
				})}
			</Routes>
		</BrowserRouter>
	)
}
