import { useMutation } from '@apollo/client'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import SignUpFooter from '../../components/auth/SignUpFooter'
import SignUpHeader from '../../components/auth/SignUpHeader'
import Form from '../../components/reusable/Form'
import Spinner from '../../components/reusable/Spinner'
import SingUpMutation from '../../graphql/mutations/sign-up.mutation'
import SignupJson from '../../json/forms/singnUp.json'
import { Routes } from '../../types/routes.type'
import { userRolesTypes } from '../../types/user-roles.type'
import iCookies from '../../utils/cookies.utils'
import iStorage from '../../utils/local-storage.utils'
import SidebarAuth from '../../components/auth/SidebarAuth'

const SignUp = () => {
	const navigate = useNavigate()

	const [signUp, { loading }] = useMutation(SingUpMutation, {
		onCompleted: (data) => {
			// toast.success('Sign Up Successful!')
			iCookies.setToken(data.signUp)
			iCookies.setRole(role)
			iStorage.setCurrentUserSignUpStep(0)
			navigate(Routes.CompleteProfile)
			return
		},
		onError: (errors) => {
			toast.error(errors.message)
			return
		},
	})

	const [role, setRole] = React.useState<userRolesTypes>(
		userRolesTypes.UserRole
	)

	const [formValues, setFormValues] = React.useState<any>(null)

	const handleFormData = (e: any) => {
		const { data } = e
		setFormValues(data)
	}

	const handleSubmit = () => {
		formValues &&
			signUp({ variables: { ...formValues, accountType: role } })
	}

	return (
		<section className='row'>
			<SidebarAuth heading='Find a tech job. Have fun.' />
			<div className='col-md-6 position-absolute end-0'>
				<div className='w-lg-lg w-md2 px-md-0 px-4 mx-auto'>
					<div className='py-6'>
						<SignUpHeader
							role={role}
							setRole={setRole}
						/>
						<main className='mt-5'>
							<Form
								formJson={SignupJson}
								handleFormData={handleFormData}
								handleSubmit={handleSubmit}
								SubmitBtn={
									<div className='d-grid mt-5'>
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
						</main>
						<SignUpFooter />
					</div>
				</div>
			</div>
		</section>
	)
}

export default SignUp
