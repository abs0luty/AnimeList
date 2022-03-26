import { api } from 'api'
import { ANILIBRIA_API_URI } from 'dotenv'
import {
	generateQueryParamsString,
	QueryObject
} from '../generateQueryParamsString'
import { Title } from './types'

export const anilibria = {
	async getTitle(queryParams: QueryObject = {}) {
		const url =
			ANILIBRIA_API_URI + '/getTitle' + generateQueryParamsString(queryParams)
		return await api.get<Title>(url)
	},
	async getTitles(queryParams: QueryObject = {}) {
		const url =
			ANILIBRIA_API_URI + '/getTitles' + generateQueryParamsString(queryParams)
		return await api.get<Title[]>(url)
	},
	async getRandomTitle(queryParams: QueryObject = {}) {
		const url =
			ANILIBRIA_API_URI +
			'/getRandomTitle' +
			generateQueryParamsString(queryParams)
		return await api.get<Title>(url)
	},
	async getUpdates(queryParams: QueryObject = {}) {
		const url =
			ANILIBRIA_API_URI + '/getUpdates' + generateQueryParamsString(queryParams)
		return await api.get<Title[]>(url)
	},
	async getChanges(queryParams: QueryObject = {}) {
		const url =
			ANILIBRIA_API_URI + '/getChanges' + generateQueryParamsString(queryParams)
		return await api.get<Title[]>(url)
	},
	async getGenres(queryParams: QueryObject = {}) {
		const url =
			ANILIBRIA_API_URI + '/getGenres' + generateQueryParamsString(queryParams)
		return await api.get<string[]>(url)
	},
	async getYears(queryParams: QueryObject = {}) {
		const url =
			ANILIBRIA_API_URI + '/getYears' + generateQueryParamsString(queryParams)
		return await api.get<number[]>(url)
	},
	async searchTitles(queryParams: QueryObject = {}) {
		const url =
			ANILIBRIA_API_URI +
			'/searchTitles' +
			generateQueryParamsString(queryParams)
		return await api.get<Title[]>(url)
	}
}
