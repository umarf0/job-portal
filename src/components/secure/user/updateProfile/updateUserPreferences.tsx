import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { toast } from 'react-toastify'
import UpdateUserPrefrencesMutation from '../../../../graphql/mutations/update-user-preferences.mutation'
import MeQuery from '../../../../graphql/queries/me.query'
import { IFormType } from '../../../../types/form.type'
import Form from '../../../reusable/Form'
import Spinner from '../../../reusable/Spinner'

interface Iprops {
	handleNextStep: () => void
	formJson: IFormType[]
}

const UpdateUserPreference = ({ handleNextStep, formJson }: Iprops) => {
	const {
		data: meData,
		loading: meLoading,
		error: meError,
	} = useQuery(MeQuery)

	const [updateUserPreferences, { loading }] = useMutation(
		UpdateUserPrefrencesMutation,
		{
			onCompleted: (data) => {
				// toast.success('Preferences Update Successfully!')
				return
			},
			onError: (errors) => {
				toast.error(errors.message)
				return
			},
		}
	)

	const [formValues, setFormValues] = React.useState<any>(null)
	const [updatedFormJson, setUpdatedFormJson] =
		React.useState<IFormType[]>(formJson)

	React.useEffect(() => {
		if (meData) {
			const newFormJson = formJson.map((form: IFormType) => ({
				...form,
				value: meData.me[form.name],
			}))
			setUpdatedFormJson(newFormJson)
		}
	}, [meData])

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
			<section className='mt-4'>
				<Form
					formJson={updatedFormJson}
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

export default UpdateUserPreference
