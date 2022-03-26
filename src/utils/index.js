import { instanceOfQuery } from './instanceOfQuery'
import { generateQueryParamsString } from './generateQueryParamsString'

export const getTitle = async (url, queryParams = {}) => {
	const newUrl = `${url}/getTitle` + generateQueryParamsString(queryParams)
	return instanceOfQuery.get(newUrl)
}
export const getTitles = async (url, queryParams = {}) => {
	const newUrl = `${url}/getTitles` + generateQueryParamsString(queryParams)
	return instanceOfQuery.get(newUrl)
}
export const getRandomTitle = async (url, queryParams = {}) => {
	const newUrl =
		`${url}/getRandomTitle` + generateQueryParamsString(queryParams)
	return instanceOfQuery.get(newUrl)
}
export const getUpdates = async (url, queryParams = {}) => {
	const newUrl = `${url}/getUpdates` + generateQueryParamsString(queryParams)
	return instanceOfQuery.get(newUrl)
}
export const getChanges = async (url, queryParams = {}) => {
	const newUrl = `${url}/getChanges` + generateQueryParamsString(queryParams)
	return instanceOfQuery.get(newUrl)
}
export const getSchedule = async (url, queryParams = {}) => {
	const newUrl = `${url}/getSchedule` + generateQueryParamsString(queryParams)
	return instanceOfQuery.get(newUrl)
}
export const getGenres = async (url, queryParams = {}) => {
	const newUrl = `${url}/getGenres` + generateQueryParamsString(queryParams)
	return instanceOfQuery.get(newUrl)
}
export const getYears = async (url, queryParams = {}) => {
	const newUrl = `${url}/getYears` + generateQueryParamsString(queryParams)
	return instanceOfQuery.get(newUrl)
}
export const searchTitles = async (url, queryParams = {}) => {
	const newUrl = `${url}/searchTitles` + generateQueryParamsString(queryParams)
	return instanceOfQuery.get(newUrl)
}
