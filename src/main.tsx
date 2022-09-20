import { ApolloProvider } from '@apollo/client'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './assets/scss/bootstrap.scss'
import Spinner from './components/reusable/Spinner'
import client from './config/graphql.config'
import store from './store/store'

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Provider store={store}>
				<Suspense
					fallback={
						<div className='vh-90 center'>
							<Spinner />
						</div>
					}>
					<Router>
						<App />
					</Router>
				</Suspense>
			</Provider>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
