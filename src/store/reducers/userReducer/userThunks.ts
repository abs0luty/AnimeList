import { createAsyncThunk } from '@reduxjs/toolkit'
import { myApi } from 'api'

export const getAnimeListThunk = createAsyncThunk(
	'user/getAnimeList',
	myApi.anime.get
)
export const getUserThunk = createAsyncThunk('user/getUser', myApi.auth.getUser)
