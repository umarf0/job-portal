import { useMutation } from '@apollo/client'
import React from 'react'
import { toast } from 'react-toastify'
import UpdateUserPrefrencesMutation from '../../../graphql/mutations/update-user-preferences.mutation'
import { IFormType } from '../../../types/form.type'
import Form from '../../reusable/Form'
import Spinner from '../../reusable/Spinner'
import HeaderSignup from '../SignupHeader'

interface Iprops {
	handleNextStep: () => void
	formJson: IFormType[]
}

const AddUserPreference = ({ handleNextStep, formJson }: Iprops) => {
	const [updateUserPreferences, { loading }] = useMutation(
		UpdateUserPrefrencesMutation,
		{
			onCompleted: (data) => {
				// toast.success('Preferences Added Successfully!')
				handleNextStep()
				return
			},
			onError: (errors) => {
				toast.error(errors.message)
				return
			},
		}
	)

	const [formValues, setFormValues] = React.useState<any>(null)

	const handleFormData = (e: any) => {
		const { index, data } = e
		setFormValues(data)
	}

	const handleSubmit = async () => {
		if (!formValues) return
		await updateUserPreferences({
			variables: {
				...formValues,
			},
		})
	}

	return (
		<section>
			<HeaderSignup
				heading='Let’s set your preferences'
				description=''
			/>
			<section className='mt-4'>
				<Form
					formJson={formJson}
					handleFormData={handleFormData}
					handleSubmit={handleSubmit}
					SubmitBtn={
						<div className='d-flex justify-content-end'>
							<button
								className='btn btn-danger btn-lg text-white'
								disabled={loading}>
								{loading ? <Spinner size='sm' /> : 'Continue'}
							</button>
						</div>
					}
				/>
			</section>
		</section>
	)
}

export default AddUserPreference
