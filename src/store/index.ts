import { applyMiddleware, combineReducers, createStore } from 'redux'
import reduxThunk from 'redux-thunk'

const reducers = combineReducers({})

export const store = createStore(reducers, applyMiddleware(reduxThunk))

export type RootState = ReturnType<typeof reducers>
