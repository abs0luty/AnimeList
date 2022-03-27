import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import { store } from './store'
import { App } from './app'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
)
