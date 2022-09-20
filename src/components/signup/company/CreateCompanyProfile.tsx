import { useMutation } from '@apollo/client'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import CreateCompanyMutation from '../../../graphql/mutations/create-company.mutation'
import UpdatePFPMutation from '../../../graphql/mutations/update-pfp-mutation'
import companyProfileJson from '../../../json/forms/company/companyProfile.json'
import { userLoginSuccess } from '../../../store/actions/user.action'
import { Routes } from '../../../types/routes.type'
import iCookies from '../../../utils/cookies.utils'
import Form from '../../reusable/Form'
import ImgUploader from '../../reusable/ImgUploader'
import Spinner from '../../reusable/Spinner'
import HeaderSignup from '../SignupHeader'

const CompanySteps = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [createCompany, { loading, error }] = useMutation(
		CreateCompanyMutation,
		{
			onCompleted: (data) => {
				toast.success('Profile created successfully')
				const role = iCookies.getRole()
				if (role) {
					dispatch(userLoginSuccess(role))
					setTimeout(() => {
						navigate(Routes.CreateJob)
					}, 0)
				}
			},
			onError: (error) => {
				toast.error(error.message)
			},
		}
	)

	const [updatePFP, { loading: updatePFPLoading }] = useMutation(
		UpdatePFPMutation,
		{
			onError: (errors) => {
				toast.error(errors.message)
				return
			},
		}
	)

	const [logoImg, setLogoImg] = React.useState(null)

	const [formValues, setFormValues] = React.useState<any>(null)

	const handleFormData = (e: any) => {
		const { index, data } = e
		setFormValues(data)
	}

	const handleGetImg = (e: any) => {
		const { name, value } = e
		setLogoImg(value)
	}

	const handleSubmit = async () => {
		if (logoImg) await updatePFP({ variables: { pfp: logoImg } })
		if (formValues) createCompany({ variables: { ...formValues } })
	}

	return (
		<section className='bg-white px-md-7 px-5 pt-7 pb-6 rounded-5 shadow-sm'>
			<HeaderSignup
				heading='Let’s create your company’s profile'
				description=''
			/>
			<section className='mb-7'>
				<ImgUploader
					handleGetImg={handleGetImg}
					loading={updatePFPLoading}
					label='Choose Company Logo'
				/>
			</section>
			{
				<Form
					formJson={companyProfileJson}
					handleFormData={handleFormData}
					handleSubmit={handleSubmit}
					SubmitBtn={
						<div className='d-flex justify-content-end align-items-end  w-100'>
							<button
								className='btn btn-danger text-white btn-lg m-0'
								type='submit'
								disabled={loading}>
								{loading ? <Spinner size='sm' /> : 'Continue'}
							</button>
						</div>
					}
				/>
			}
		</section>
	)
}

export default CompanySteps
