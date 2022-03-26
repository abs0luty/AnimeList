import jwt from 'jsonwebtoken'

import { api } from 'api'
import { Anime, AnimeProperties } from './types'

export const anime = {
	async get() {
		const tokenData: any = jwt.decode(api.token)
		return await api.get<Anime[]>(`/anime/${tokenData.id}`)
	},
	async create(anime: Anime) {
		const tokenData: any = jwt.decode(api.token)

		const newAnime: Anime = {
			name: anime.name,
			status: anime.status,
			userId: tokenData.id
		}

		return await api.post<Anime, Anime>('/anime', newAnime)
	},
	async edit(anime: AnimeProperties, id: string) {
		return await api.put<AnimeProperties, Anime>(`/anime/${id}`, anime)
	},
	async delete(id: string) {
		return await api.delete<Anime>(`/anime/${id}`)
	}
}
