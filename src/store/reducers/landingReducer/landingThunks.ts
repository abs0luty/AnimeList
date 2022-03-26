import { createAsyncThunk } from '@reduxjs/toolkit'
import { myApi } from 'api'

export const registrationThunk = createAsyncThunk(
	'user/registration',
	myApi.auth.registration
)
export const loginThunk = createAsyncThunk('user/login', myApi.auth.login)
export const authCheckThunk = createAsyncThunk(
	'user/authCheck',
	myApi.auth.authCheck
)
export const forgotPasswordThunk = createAsyncThunk(
	'user/forgotPassword',
	myApi.auth.forgotPassword
)
// todo: titlelist
