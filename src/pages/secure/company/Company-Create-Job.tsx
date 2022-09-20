import { useMutation } from '@apollo/client'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Form from '../../../components/reusable/Form'
import PreviousNavigationBtn from '../../../components/reusable/BtnPrevNavigation'
import Spinner from '../../../components/reusable/Spinner'
import CreateJobPostingMutation from '../../../graphql/mutations/create-job-post.mutation'
import companyJobJson from '../../../json/forms/company/companyJob.json'
import { Routes } from '../../../types/routes.type'

const CompanyCreateJob = () => {
	const navigate = useNavigate()

	const [createJobPosting, { loading, error }] = useMutation(
		CreateJobPostingMutation,
		{
			onCompleted: (data) => {
				// toast.success('Job created successfully')
				navigate(Routes.CompanyViewJobs)
				return
			},
			onError: (error) => {
				toast.error(error.message)
				return
			},
		}
	)

	const [formValues, setFormValues] = React.useState<any>(null)

	const handleFormData = (e: any) => {
		const { index, data } = e
		setFormValues(data)
	}

	const handleSubmit = () => {
		if (formValues) createJobPosting({ variables: { ...formValues } })
	}

	return (
		<div>
			<section>
				<header className='mb-6'>
					<PreviousNavigationBtn />
					<h4>Create a Job Posting</h4>
				</header>
				<Form
					formJson={companyJobJson}
					handleFormData={handleFormData}
					handleSubmit={handleSubmit}
					SubmitBtn={
						<div className='d-flex justify-content-end mt-6'>
							<button
								className='btn btn-danger text-white btn-lg btn-block'
								disabled={loading}
								type='submit'>
								{loading ? <Spinner size='sm' /> : 'Continue'}
							</button>
						</div>
					}
				/>
			</section>
		</div>
	)
}

export default CompanyCreateJob
