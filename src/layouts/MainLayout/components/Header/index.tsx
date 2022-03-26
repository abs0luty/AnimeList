import { FC } from 'react'
import { Typography, Dropdown, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import styles from './styles.module.scss'
import { Hamburger } from './components/Hamburger'
import { routes } from 'components/Router/routes'
import { useWindowSize } from 'hooks/useWindowSize'
import { useAppSelector } from 'hooks/useAppSelector'
import { logout } from 'store/reducers/landingReducer'

const { other: otherRoutes } = routes

export const Header: FC = () => {
	const { width } = useWindowSize()
	const isMobile = width <= 768

	const dispatch = useDispatch()
	const login = useAppSelector(state => state.user.login)

	const onClickLogout = () => {
		dispatch(logout())
	}

	const Account = (
		<Menu>
			{otherRoutes
				.filter(
					route => route.type === 'login' || route.type === 'registration'
				)
				.map(route => (
					<Menu.Item key={route.key}>
						<Link to={route.route}>{route.name}</Link>
					</Menu.Item>
				))}
			<Menu.Item key='logout' onClick={onClickLogout}>
				Выйти
			</Menu.Item>
		</Menu>
	)

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
							<Menu.Item key='random-title'>
								<Link to='/'>Рандомный тайтл</Link>
							</Menu.Item>
						</Menu>
					</div>
					<Dropdown overlay={Account}>
						<p className={styles.accountButton}>{login || 'Не авторизован'}</p>
					</Dropdown>
				</>
			)}
		</header>
	)
}
