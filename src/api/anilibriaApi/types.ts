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
	names: {
		ru: string
		en: string
	}
	announce: string
	series: string
	posters: {
		original: {
			url: string
		}
		small: {
			url: string
		}
	}
	season: {
		string: string
		year: string
	}
	favorite: ChosenOne
	last: number
	moon: string
	status: {
		string: string
	}
	type: {
		full_string: string
	}
	last_changes: string
	team: {
		voice: string[]
		timing: string[]
		translator: string[]
		editing: string[]
		decor: string[]
	}
	genres: string[]
	year: number
	day: number
	description: string
	blocked: Block
	playlist?: Series[]
	torrents?: Torrent[]
}
