import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useWindowSize } from 'hooks/useWindowSize'
import { AnimePageMobile } from './components/AnimePageMobile'
import { AnimePageDesktop } from './components/AnimePageDesktop'
import { useAppSelector } from 'hooks/useAppSelector'
import { Status } from 'api/myApi/anime/types'
import { anilibriaApi } from 'api'
import { QueryObject } from 'api/generateQueryParamsString'
import { Title } from '../../api/anilibriaApi/types'

export const AnimePage: FC = () => {
	const { width } = useWindowSize()
	const isMobile = width <= 768

	const { titleName } = useParams()

	const animeList = useAppSelector(state => state.user.animeList)
	const searchTitle = useAppSelector(
		state =>
			state.landing.titleList.filter(
				title => title.names.ru === titleName || title.names.en === titleName
			)[0]
	)

	const [titleMain, setTitleMain] = useState<Title>(searchTitle)
	const [currentStatus, setCurrentStatus] = useState<Status | -1>(-1)

	useEffect(() => {
		const currentStatusForState = animeList.filter(
			anime => anime.name === titleMain?.names?.ru
		)[0]?.status
		setCurrentStatus(currentStatusForState || -1)

		return () => {
			setCurrentStatus(-1)
		}
	}, [animeList, titleMain?.names?.ru])

	useEffect(() => {
		const func = async () => {
			const options: QueryObject = {
				id: searchTitle?.id
			}
			const title = await anilibriaApi.getTitle(options)
			setTitleMain(title)
		}
		func()
	}, [searchTitle?.id])

	return isMobile ? (
		<AnimePageMobile titleMain={titleMain} currentStatus={currentStatus} />
	) : (
		<AnimePageDesktop titleMain={titleMain} currentStatus={currentStatus} />
	)
}
