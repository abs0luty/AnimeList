export const generateQueryParamsString = (queryParamsObject) => {
	const stringQueryParamsObject = {}
	const queryString = new URLSearchParams()
	for (const key in queryParamsObject) {
		stringQueryParamsObject[key] = String(queryParamsObject[key]).split(',')
		queryString.set(key, stringQueryParamsObject[key].join(','))
	}
	return `${queryString.toString().length > 0 ? '?' : ''}${queryString.toString()}`
}
