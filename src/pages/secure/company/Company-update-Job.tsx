import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Form from '../../../components/reusable/Form'
import PreviousNavigationBtn from '../../../components/reusable/BtnPrevNavigation'
import Spinner from '../../../components/reusable/Spinner'
import UpdateJobPostingMutation from '../../../graphql/mutations/update-job-posting.mutation'
import MeQuery from '../../../graphql/queries/me.query'
import companyJobJson from '../../../json/forms/company/companyJob.json'
import { IFormType } from '../../../types/form.type'
import { Routes } from '../../../types/routes.type'

const UpdateJobPost = () => {
	const navigate = useNavigate()
	const params = useParams()

	const {
		data: meData,
		loading: meLoading,
		error: meError,
	} = useQuery(MeQuery)
	const [updateJobPosting, { loading }] = useMutation(
		UpdateJobPostingMutation,
		{
			onCompleted: () => {
				// toast.success('Job posting updated successfully')
				navigate(Routes.CompanyViewJobs)
			},
		}
	)

	const [formValues, setFormValues] = React.useState<any>(null)

	const [updatedFormJson, setUpdatedFormJson] =
		React.useState<IFormType[]>(companyJobJson)

	React.useEffect(() => {
		if (meData) {
			let newFormJson: IFormType[] = companyJobJson
			console.log('newFormJson', newFormJson)
			meData?.me?.company?.jobsPostings.forEach((job: any) => {
				if (job.id === params.id) {
					newFormJson = newFormJson.map((form: IFormType) => {
						return {
							...form,
							value: job[form.name],
						}
					})
				}
			})

			setUpdatedFormJson(newFormJson)
		}
	}, [meData])

	const handleFormData = (e: any) => {
		const { index, data } = e
		setFormValues(data)
	}

	const handleSubmit = () => {
		if (formValues) {
			const { id } = params
			updateJobPosting({
				variables: {
					updateJobPostingId: id,
					...formValues,
				},
			})
		}
	}

	return (
		<div>
			<section>
				<header className='mb-6'>
					<PreviousNavigationBtn />
					<h4>Update a Job Posting</h4>
				</header>
				<Form
					formJson={updatedFormJson}
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

export default UpdateJobPost
function useHistory() {
	throw new Error('Function not implemented.')
}
