import { Routes } from './types'
import { Login } from 'components/Login'
import { Registration } from 'components/Registration'
import { RestorePassword } from 'components/RestorePassword'

export const routes: Routes = {
	main: {
		key: 'main',
		route: '/'
	},
	other: [
		{
			key: 'login',
			name: 'Логин',
			route: '/login',
			type: 'login',
			component: Login
		},
		{
			key: 'registration',
			name: 'Регистрация',
			route: '/registration',
			type: 'registration',
			component: Registration
		},
		{
			key: 'rememberPassword',
			name: 'Забыли пароль?',
			route: '/restore-password',
			type: 'rememberPassword',
			component: RestorePassword
		},
		{
			key: 'animelist',
			name: 'Аниме список',
			route: '/',
			type: 'another',
			component: Registration // todo: Anime List
		},
		{
			key: 'animelibrary',
			name: 'Библиотека',
			route: '/anime-library',
			type: 'another',
			component: Registration // todo: Anime Library
		}
	]
}
