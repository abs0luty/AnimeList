import {
	CheckCircleOutlined,
	ClearOutlined,
	CloseCircleOutlined,
	FieldTimeOutlined,
	SyncOutlined
} from '@ant-design/icons'
import { FC } from 'react'

import { Status } from 'api/myApi/anime/types'

export const selectStatus = (status: Status) => {
	if (status === 0) return 'Просмотренно'
	if (status === 1) return 'Смотрю'
	if (status === 2) return 'Запланированно'
	if (status === 3) return 'Выходит'
	if (status === 4) return 'Заброшено'
}

export const selectStatusColor = (status: Status) => {
	if (status === 0) return 'green'
	if (status === 1) return 'cyan'
	if (status === 2) return 'volcano'
	if (status === 3) return 'magenta'
	if (status === 4) return 'red'
}

export const selectStatusIcon = (status: Status): FC => {
	if (status === 0) {
		return CheckCircleOutlined
	}
	if (status === 1) {
		return SyncOutlined
	}
	if (status === 2) {
		return CloseCircleOutlined
	}
	if (status === 3) {
		return FieldTimeOutlined
	}
	if (status === 4) {
		return ClearOutlined
	}
	return CheckCircleOutlined
}
