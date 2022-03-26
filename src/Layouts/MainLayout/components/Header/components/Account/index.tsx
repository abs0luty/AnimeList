import { Menu } from 'antd'
import { Link } from 'react-router-dom'

import { routes } from 'components/Router/routes'

const { other: otherRoutes } = routes

export const Account = (
	<Menu>
		{otherRoutes
			.filter(route => route.type === 'login' || route.type === 'registration')
			.map(route => (
				<Menu.Item key={route.key}>
					<Link to={route.route}>{route.name}</Link>
				</Menu.Item>
			))}
		<Menu.Item>Выйти</Menu.Item>
	</Menu>
)
