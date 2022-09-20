import React from 'react'
import { Route, Routes as Router, useNavigate } from 'react-router-dom'
import { userRolesTypes } from '../../types/user-roles.type'
import { Routes } from '../../types/routes.type'
import iCookies from '../../utils/cookies.utils'
import Footer from '../reusable/Footer'
import Navbar from '../reusable/Navbar'
import CompanySteps from './company/CreateCompanyProfile'
import UserSteps from './userSteps/CreateUserProfileSteps'

const CompleteProfile = () => {
	const role = iCookies.getRole()
	const token = iCookies.getToken()
	const navigate = useNavigate()

	React.useEffect(() => {
		if (!token) {
			navigate(Routes.SignUp)
		}
	}, [token])

	return (
		<section className='bg-danger bg-opacity-10 min-vh-100'>
			<Navbar />

			<section className='container px-lg-9 px-md-7 px-4 mt-md-7'>
				{
					<Router>
						{role == userRolesTypes.UserRole ? (
							<Route
								path={'/'}
								element={<UserSteps />}
							/>
						) : (
							<Route
								path={'/'}
								element={<CompanySteps />}
							/>
						)}
					</Router>
				}
			</section>
			<footer className='mt-9'>
				<Footer />
			</footer>
		</section>
	)
}

export default CompleteProfile
