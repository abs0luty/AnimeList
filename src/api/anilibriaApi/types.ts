export interface Torrent {
	id: number
	hash: string
	leechers: number
	seeders: number
	completed: number
	quality: string
	series: string
	size: number
	url: string
}

export interface Series {
	id: number
	title: string
	sd: string
	hd: string
	fullhd: string
	srcSd: string
	srcHd: string
}

export interface Block {
	blocked: boolean
	reason?: string
}

export interface ChosenOne {
	rating: number
	added: boolean
}

export interface Title {
	id: number
	code: string
	names: string[]
	series: string
	poster: string
	favorite: ChosenOne
	last: number
	moon: string
	status: string
	type: string
	genres: string[]
	voices: string[]
	year: number
	day: number
	description: string
	blockedInfo: Block
	playlist?: Series[]
	torrents?: Torrent[]
}
