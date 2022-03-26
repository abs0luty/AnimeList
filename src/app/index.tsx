import React from 'react'

import { Router } from 'components/Router'
import { MainLayout } from 'Layouts/MainLayout'

export const App: React.FC = () => {
	return (
		<Router>
			<MainLayout>
				<p>Hello!</p>
				<p>Hello 2x</p>
			</MainLayout>
		</Router>
	)
}
