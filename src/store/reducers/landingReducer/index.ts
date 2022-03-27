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

const landingSlice = createSlice({
	name: 'landing',
	initialState: {
		userId: '',
		isAuth: false,
		titleList: [] as Title[],
		randomTitle: {} as Title,
		autoCompleteOptions: [] as Array<{ value: string }>,
		isAdult: false,
		authError: false,
		registrationError: false as true | 'success',
		forgotPasswordError: false as true | 'success'
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
				api.setUserToken(payload.access_token)
				localStorage.setItem('token', payload.access_token)
				state.authError = false
				state.isAuth = true
			})
			.addCase(loginThunk.rejected, state => {
				state.authError = true
			})
			.addCase(registrationThunk.fulfilled, state => {
				state.registrationError = 'success'
			})
			.addCase(registrationThunk.rejected, state => {
				state.registrationError = true
			})
			.addCase(authCheckThunk.fulfilled, (state, { payload }) => {
				state.userId = payload.id
				state.isAuth = true
			})
			.addCase(authCheckThunk.rejected, state => {
				localStorage.setItem('token', '')
				state.isAuth = false
			})
			.addCase(forgotPasswordThunk.fulfilled, state => {
				state.forgotPasswordError = 'success'
			})
			.addCase(forgotPasswordThunk.rejected, state => {
				state.forgotPasswordError = true
			})
			.addCase(getUpdatesThunk.fulfilled, (state, { payload }) => {
				const randomIdx = Math.floor(Math.random() * state.titleList.length)
				state.titleList = payload
				state.randomTitle = payload[randomIdx]
			})
	}
})

export const { reducer: landingReducer } = landingSlice
export const { setAdult, logout, setRandomTitle, setAutoCompleteOption } =
	landingSlice.actions
