import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Title } from 'api/anilibriaApi/types'
import { api } from 'api'
import {
	loginThunk,
	forgotPasswordThunk,
	registrationThunk,
	authCheckThunk,
	getUpdatesThunk
} from './landingThunks'
import { errorMessage, successMessage } from 'helpers/messages'

const landingSlice = createSlice({
	name: 'landing',
	initialState: {
		userId: '',
		isAuth: false,
		titleList: [] as Title[],
		randomTitle: {} as Title,
		autoCompleteOptions: [] as Array<{ value: string }>,
		isAdult: false,
		registrationComplete: false,
		forgotPasswordComplete: false
	},
	reducers: {
		setAdult(state, { payload }: PayloadAction<boolean>) {
			state.isAdult = payload
		},
		logout(state) {
			state.isAuth = false
			state.isAdult = false
			localStorage.setItem('token', '')
		},
		setRandomTitle(state) {
			const randomIdx = Math.floor(Math.random() * state.titleList.length)
			state.randomTitle = state.titleList[randomIdx]
		},
		setAutoCompleteOption(
			state,
			{ payload }: PayloadAction<Array<{ value: string }>>
		) {
			state.autoCompleteOptions = payload
		}
	},
	extraReducers: builder => {
		builder
			.addCase(loginThunk.fulfilled, (state, { payload }) => {
				successMessage('Успешный логин!')
				api.setUserToken(payload.access_token)
				localStorage.setItem('token', payload.access_token)
				state.isAuth = true
			})
			.addCase(loginThunk.rejected, state => {
				errorMessage('Проверьте введённые данные!')
			})
			.addCase(registrationThunk.fulfilled, state => {
				state.registrationComplete = true
			})
			.addCase(registrationThunk.rejected, state => {
				errorMessage('Такой пользователь уже существует!')
				state.registrationComplete = false
			})
			.addCase(authCheckThunk.fulfilled, (state, { payload }) => {
				state.userId = payload.id
				state.isAuth = true
			})
			.addCase(authCheckThunk.rejected, state => {
				errorMessage('Не авторизован')
				localStorage.setItem('token', '')
				state.isAuth = false
			})
			.addCase(forgotPasswordThunk.fulfilled, state => {
				state.forgotPasswordComplete = true
			})
			.addCase(forgotPasswordThunk.rejected, state => {
				errorMessage('Проверьте введённые данные!')
				state.forgotPasswordComplete = false
			})
			.addCase(getUpdatesThunk.fulfilled, (state, { payload }) => {
				const randomIdx = Math.floor(Math.random() * state.titleList.length)
				state.titleList = payload
				state.randomTitle = payload[randomIdx]
			})
			.addCase(getUpdatesThunk.rejected, state => {
				errorMessage(
					'Не удалось подключиться к серверу анилибрии, попробуйте перезагрузить страницу'
				)
			})
	}
})

export const { reducer: landingReducer } = landingSlice
export const { setAdult, logout, setRandomTitle, setAutoCompleteOption } =
	landingSlice.actions
