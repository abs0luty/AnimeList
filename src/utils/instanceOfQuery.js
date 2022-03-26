import axios from 'axios'

export const instanceOfQuery = {
	async get(url) {
		const result = await axios.get(url)
		return result.data
	}
}