import { useMutation } from '@apollo/client'
import { memo } from 'react'
import { toast } from 'react-toastify'
import CreateEducationMutation from '../../../graphql/mutations/create-education.mutation'
import { IMultiFormProps } from '../../../types/form.type'
import MultiForms from '../../reusable/MultiForms'
import HeaderSignup from '../SignupHeader'

interface Iprops {
	handleNextStep: () => void
	formJson: IMultiFormProps
}

const AddUserEducation = ({ handleNextStep, formJson }: Iprops) => {
	const [createEducation, { loading, error }] = useMutation(
		CreateEducationMutation
	)

	const handleSubmit = async (data: any) => {
		const educationsData = Object.keys(data).map(async (key: string) => {
			return await createEducation({
				variables: {
					...data[key],
				},
			})
		})
		const response = await Promise.all(educationsData)
		if (response) {
			// toast.success('Education added successfully')
			handleNextStep()
		} else {
			toast.error('Something went wrong')
		}
	}

	return (
		<section>
			<HeaderSignup
				heading='Let’s dive into your education'
				description=''
			/>
			<MultiForms
				formJson={formJson}
				handleSubmit={handleSubmit}
				formHeading='Education'
				btnLoading={loading}
			/>
		</section>
	)
}

export default memo(AddUserEducation)
