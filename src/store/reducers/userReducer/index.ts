import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Anime, Status } from 'api/myApi/anime/types'
import { getAnimeListThunk, getUserThunk } from './userThunks'

const userSlice = createSlice({
	name: 'user',
	initialState: {
		id: '',
		login: '',
		email: '',
		password: '',
		animeList: [] as Anime[],
		loading: false,
		error: false
	},
	reducers: {
		setName(state, { payload }: PayloadAction<string>) {
			state.login = payload
		},
		setEmail(state, { payload }: PayloadAction<string>) {
			state.email = payload
		},
		setPassword(state, { payload }: PayloadAction<string>) {
			state.password = payload
		},
		addToAnimeList(state, { payload }: PayloadAction<Anime>) {
			state.animeList = [...state.animeList, payload]
		},
		removeFromAnimeList(state, { payload }: PayloadAction<string>) {
			state.animeList = state.animeList.filter(anime => anime._id !== payload)
		},
		editAnimeStatus(
			state,
			{ payload }: PayloadAction<{ animeId: string; status: Status }>
		) {
			const animeListCopy: Anime[] = JSON.parse(JSON.stringify(state.animeList))

			const [animeForEdit] = animeListCopy.filter(
				anime => anime._id === payload.animeId
			)
			animeForEdit.status = payload.status

			state.animeList = animeListCopy
		}
	},
	extraReducers: builder => {
		builder
			.addCase(getAnimeListThunk.fulfilled, (state, { payload }) => {
				state.error = false
				state.loading = false
				state.animeList = payload
			})
			.addCase(getAnimeListThunk.pending, (state, { payload }) => {
				state.loading = true
			})
			.addCase(getAnimeListThunk.rejected, (state, { payload }) => {
				state.error = true
			})
			.addCase(getUserThunk.fulfilled, (state, { payload }) => {
				state.login = payload.login as string
				state.email = payload.email
				state.password = payload.password
				state.id = payload._id as string
			})
	}
})

export const { reducer: userReducer } = userSlice
export const {
	setName,
	setEmail,
	setPassword,
	addToAnimeList,
	removeFromAnimeList,
	editAnimeStatus
} = userSlice.actions
