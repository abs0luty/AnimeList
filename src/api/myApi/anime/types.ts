export type Status = 0 | 1 | 2 | 3 | 4

export interface Anime {
	_id?: string
	name: string
	status: Status
	userId?: string
}

export interface AnimeProperties {
	_id?: string
	name?: string
	status?: Status
	userId?: string
}
