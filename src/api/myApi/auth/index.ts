import axios from 'axios'
import jwt from 'jsonwebtoken'

import { api } from 'api'
import { User, UserProperties } from './types'

export const auth = {
	async registration(user: User) {
		return await axios.post<User, User>('/users/registration', user)
	},
	async login(user: User) {
		return await axios.post<User, any>('/auth', user)
	},
	async authCheck(token: string) {
		return await api.get<string>('/auth-check')
	},
	async forgotPassword(user: UserProperties) {
		return await api.post<UserProperties, User>('/users/forgot-password', user)
	},
	async getUser() {
		const tokenData: any = jwt.decode(api.token)
		return await api.get(`/users/${tokenData?.id}`)
	}
}
