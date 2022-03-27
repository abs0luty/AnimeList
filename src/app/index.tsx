import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Router } from 'components/Router'
import { MainLayout } from 'layouts/MainLayout'
import {
	authCheckThunk,
	getUpdatesThunk
} from 'store/reducers/landingReducer/landingThunks'
import { api } from 'api'
import { useAppSelector } from 'hooks/useAppSelector'
import {
	getAnimeListThunk,
	getUserThunk
} from 'store/reducers/userReducer/userThunks'
import { objectParamsByDefault } from 'api/anilibriaApi'
import { AnimeList } from 'components/AnimeList'

export const App: React.FC = () => {
	const dispatch = useDispatch()
	const { isAuth, userId } = useAppSelector(state => state.landing)

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			api.setUserToken(token)
			dispatch(authCheckThunk(token))
		}
		if (isAuth && userId) {
			dispatch(getUserThunk(userId))
			dispatch(getAnimeListThunk(userId))
			dispatch(getUpdatesThunk(objectParamsByDefault))
		}
	}, [dispatch, isAuth, userId])

	return (
		<Router>
			<MainLayout>
				<AnimeList />
			</MainLayout>
		</Router>
	)
}
