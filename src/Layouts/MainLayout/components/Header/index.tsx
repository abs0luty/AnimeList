import { FC } from 'react'
import { Typography, Dropdown, Menu } from 'antd'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'
import { Account } from './components/Account'
import { Hamburger } from './components/Hamburger'
import { routes } from 'components/Router/routes'
import { useWindowSize } from 'hooks/useWindowSize'

const { other: otherRoutes } = routes

export const Header: FC = () => {
	const { width } = useWindowSize()
	const isMobile = width <= 768

	return (
		<header className={styles.header}>
			<div className={styles.headerItem1}>
				<Typography.Title level={4} style={{ color: 'white', margin: 0 }}>
					AnimeList
				</Typography.Title>
			</div>
			{isMobile ? (
				<Hamburger />
			) : (
				<>
					<div className={styles.headerItem2}>
						<Menu mode='horizontal' theme='dark'>
							{otherRoutes
								.filter(route => route.type === 'another')
								.map(route => (
									<Menu.Item key={route.key}>
										<Link to={route.route}>{route.name}</Link>
									</Menu.Item>
								))}
							<Menu.Item>
								<Link to='/'>Рандомный тайтл</Link>
							</Menu.Item>
						</Menu>
					</div>
					<Dropdown overlay={Account}>
						<p className={styles.accountButton}>Averito</p>
					</Dropdown>
				</>
			)}
		</header>
	)
}
