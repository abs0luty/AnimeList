import { Status } from 'api/myApi/anime/types'

export const selectStatus = (status: Status) => {
	if (status === 0) return 'Просмотренно'
	if (status === 1) return 'Смотрю'
	if (status === 2) return 'Запланированно'
	if (status === 3) return 'Выходит'
	if (status === 4) return 'Заброшено'
}

export const selectStatusToNumber = (status: string): Status => {
	if (status === 'Просмотренно') return 0
	if (status === 'Смотрю') return 1
	if (status === 'Запланированно') return 2
	if (status === 'Выходит') return 3
	if (status === 'Заброшено') return 4
	return 0
}

export const selectStatusColor = (status: Status) => {
	if (status === 0) return 'green'
	if (status === 1) return 'cyan'
	if (status === 2) return 'volcano'
	if (status === 3) return 'magenta'
	if (status === 4) return 'red'
}
