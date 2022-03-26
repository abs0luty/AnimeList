import { FC } from 'react'
import classnames from 'classnames'
import { useDispatch } from 'react-redux'

import styles from './styles.module.scss'
import menuWallpaper from 'assets/images/hamburgerMenuWallpaper.png'
import { routes } from 'components/Router/routes'
import { useToggle } from 'hooks/useToggle'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'hooks/useAppSelector'
import { logout } from 'store/reducers/landingReducer'

const { other: otherRoutes } = routes

export const Hamburger: FC = () => {
	const { value: opened, setValue: setOpened } = useToggle()

	const dispatch = useDispatch()
	const login = useAppSelector(state => state.user.login)

	const onClickLogout = () => {
		dispatch(logout())
	}

	const closeButton = (
		<div
			className={classnames(
				styles.closeButton,
				opened ? styles.closeButtonActive : styles.closeButtonDisable
			)}
			onClick={setOpened}
		>
			<span
				className={classnames(styles.closeButtonSpans, styles.closeButtonSpan1)}
			/>
			<span
				className={classnames(styles.closeButtonSpans, styles.closeButtonSpan2)}
			/>
			<span
				className={classnames(styles.closeButtonSpans, styles.closeButtonSpan3)}
			/>
		</div>
	)

	return (
		<>
			{closeButton}
			<div
				className={classnames(
					styles.menuWrapper,
					opened ? styles.menuActive : styles.menuDisable
				)}
			>
				<div
					className={styles.menuContainer}
					style={{
						background: `url("${menuWallpaper}") 101% 105%/200px 300px no-repeat`
					}}
				>
					<div className={styles.menu}>
						<div className={styles.closeButtonInMenu}>{closeButton}</div>
						<h2 className={styles.menuTitle}>{login || 'Не авторизован'}</h2>
						<ul className={styles.menuOptions}>
							{otherRoutes
								.filter(route => route.type === 'another')
								.map(route => (
									<li key={route.key}>
										<Link to={route.route}>{route.name}</Link>
									</li>
								))}
							<li>
								<Link to='/'>Рандомный тайтл</Link>
							</li>
							{otherRoutes
								.filter(
									route =>
										route.type === 'login' || route.type === 'registration'
								)
								.map(route => (
									<li key={route.key}>
										<Link to={route.route}>{route.name}</Link>
									</li>
								))}
							<li onClick={onClickLogout}>Выйти</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
