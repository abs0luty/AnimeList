import { api } from 'api'
import { Anime, AnimeProperties } from './types'

export const anime = {
	async get(userId: string) {
		return await api.get<Anime[]>(`/anime/${userId}`)
	},
	async create(anime: Anime, userId: string) {
		const newAnime: Anime = {
			name: anime.name,
			status: anime.status,
			userId
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
