import {
	CheckCircleOutlined,
	ClearOutlined,
	CloseCircleOutlined,
	FieldTimeOutlined,
	SyncOutlined
} from '@ant-design/icons'
import { FC } from 'react'

export const selectStatus = (status: number) => {
	if (status === 0) return 'Просмотренно'
	if (status === 1) return 'Смотрю'
	if (status === 2) return 'Запланированно'
	if (status === 3) return 'Выходит'
	if (status === 4) return 'Заброшено'
}

export const selectStatusColor = (status: number) => {
	if (status === 0) return 'green'
	if (status === 1) return 'cyan'
	if (status === 2) return 'volcano'
	if (status === 3) return 'magenta'
	if (status === 4) return 'red'
}

export const selectStatusIcon = (status: number): FC => {
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
