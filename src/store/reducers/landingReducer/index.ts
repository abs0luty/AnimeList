import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Title } from 'api/anilibriaApi/types'
import { api } from 'api'
import {
	loginThunk,
	forgotPasswordThunk,
	registrationThunk,
	authCheckThunk
} from './landingThunks'

const landingSlice = createSlice({
	name: 'landing',
	initialState: {
		userId: '',
		isAuth: false,
		titleList: [] as Title[],
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
	}
})

export const { reducer: landingReducer } = landingSlice
export const { setAdult, logout } = landingSlice.actions
