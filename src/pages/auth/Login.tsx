import { useMutation } from '@apollo/client'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Form from '../../components/reusable/Form'
import Spinner from '../../components/reusable/Spinner'
import SignInMutation from '../../graphql/mutations/login.mutation'
import LoginJson from '../../json/forms/login.json'
import {
	userLoginStart,
	userLoginSuccess,
} from '../../store/actions/user.action'
import { Routes } from '../../types/routes.type'
import iCookies from '../../utils/cookies.utils'
import { createInitialState } from '../../utils/createInitialState.utils'
import { validateForm } from '../../utils/form.utils'
import SidebarAuth from '../../components/auth/SidebarAuth'

const Login = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [login, { loading, error }] = useMutation(SignInMutation, {
		onCompleted({ signIn }) {
			dispatch(userLoginStart())
			iCookies.setToken(signIn.token)
			iCookies.setRole(signIn.user.accountType[0])
			dispatch(userLoginSuccess(signIn.user.accountType[0]))
			// toast.success('Login successful')
			setTimeout(() => {
				navigate(Routes.Matches)
			}, 0)
			return
		},
		onError(error) {
			toast.error(error.message)
		},
	})

	const [formValues, setFormValues] = React.useState(null)

	const handleFormData = (e: any) => {
		const { data } = e
		setFormValues(data)
	}

	const handleSubmit = () => {
		formValues && login({ variables: formValues })
	}

	return (
		<section className='row'>
			<SidebarAuth heading='Hire or Get Hired Easily' />
			<div className='col-md-6 position-absolute end-0'>
				<div className='w-lg-lg w-md2 px-md-0 px-4 mx-auto py-6'>
					<div className=''>
						<header>
							<div className='text-center'>
								<h4>Sign In</h4>
								{/*<p>Lörem ipsum ben krobåns tilasade</p>*/}
							</div>
						</header>
						<main className='mt-6'>
							{
								<Form
									formJson={LoginJson}
									handleFormData={handleFormData}
									handleSubmit={handleSubmit}
									SubmitBtn={
										<div className='d-grid mt-4'>
											<button
												className='btn btn-danger text-white p-3'
												type='submit'
												disabled={loading}>
												{loading ? (
													<Spinner size='sm' />
												) : (
													'Continue'
												)}
											</button>
										</div>
									}
								/>
							}
							<div className='text-center mt-5'>
								<Link
									to={Routes.SignUp}
									className='text-decoration-underline'>
									Don’t have an account?
								</Link>
							</div>
							{/*<div className='text-center mt-4'>*/}
							{/*	<span>OR</span>*/}
							{/*</div>*/}
							{/*<div className='d-grid mt-5'>*/}
							{/*	<button*/}
							{/*		className='btn btn-light text-dark p-3'*/}
							{/*		type='button'>*/}
							{/*		<img*/}
							{/*			src='/assets/imgs/google.png'*/}
							{/*			className='me-3 h-15px w-15px'*/}
							{/*			alt=''*/}
							{/*		/>*/}
							{/*		Continue with Google*/}
							{/*	</button>*/}
							{/*</div>*/}
							{/*<div className='d-grid mt-3'>*/}
							{/*	<button*/}
							{/*		className='btn bg-primary bg-opacity-75 text-white p-3'*/}
							{/*		type='button'>*/}
							{/*		<img*/}
							{/*			src='/assets/imgs/Facebook.png'*/}
							{/*			className='me-3 h-15px w-15px'*/}
							{/*			alt=''*/}
							{/*		/>*/}
							{/*		Continue with facebook*/}
							{/*	</button>*/}
							{/*</div>*/}
						</main>
						<footer>
							<div className='mt-5 text-center'>
								<small>
									By clicking Login, you agree to Molerat’s{' '}
									<span
										style={{ textDecoration: 'underline' }}>
										Terms of Use
									</span>{' '}
									and{' '}
									<span
										style={{ textDecoration: 'underline' }}>
										Privacy Policy
									</span>
								</small>
							</div>
						</footer>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Login
