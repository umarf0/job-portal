import { useLazyQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from './components/reusable/Spinner'
import RenderRoutes from './config/routes.config'
import MeQuery from './graphql/queries/me.query'
import { authRoutes, publicRoutes, secureRoutes } from './routes'

import PageNotFound from './components/404/PageNotFound'
import {
	userLoginFailure,
	userLoginStart,
	userLoginSuccess,
} from './store/actions/user.action'
import iCookies from './utils/cookies.utils'

const App = () => {
	const [getMe] = useLazyQuery(MeQuery)
	const dispatch = useDispatch()

	const {
		isAuthenticated,
		loading: loadingUser,
		currentUserRole,
	} = useSelector((state: any) => state.user)
	const [loading, setLoading] = React.useState(true)

	useEffect(() => {
		if (!loadingUser) {
			setTimeout(() => {
				setLoading(false)
			}, 1)
		}
	}, [loadingUser])

	useEffect(() => {
		dispatch(userLoginStart())
		const token = iCookies.getToken()
		const role = iCookies.getRole()
		if (token && role) {
			dispatch(userLoginSuccess(role))
		} else {
			dispatch(userLoginFailure())
		}
	}, [])

	useEffect(() => {
		getMe()
	}, [isAuthenticated])

	if (loading)
		return (
			<section className='vh-90 center'>
				<Spinner></Spinner>
			</section>
		)

	return (
		<>
			<ToastContainer />
			<Routes>
				{RenderRoutes(
					[...publicRoutes, ...authRoutes, ...secureRoutes],
					isAuthenticated,
					currentUserRole
				)}
				<Route
					path='*'
					element={<PageNotFound />}
				/>
			</Routes>
		</>
	)
}

export default App
