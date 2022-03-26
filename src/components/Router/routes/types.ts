import React from 'react'

type TypeRoute = 'login' | 'registration' | 'another' | 'rememberPassword'

interface MainRoute {
	key: string
	route: string
}

interface Route {
	name: string
	key: string
	type: TypeRoute
	route: string
	component: React.FC<any>
}

export interface Routes {
	main: MainRoute
	other: Route[]
}
