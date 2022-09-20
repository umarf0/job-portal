import { useMutation } from '@apollo/client'
import { toast } from 'react-toastify'
import CreateJobExperienceMutation from '../../../graphql/mutations/create-job-experience.mutation'
import { IMultiFormProps } from '../../../types/form.type'
import MultiForms from '../../reusable/MultiForms'
import HeaderSignup from '../SignupHeader'

interface Iprops {
	handleNextStep: () => void
	formJson: IMultiFormProps
}

const AddUserExperience = ({ handleNextStep, formJson }: Iprops) => {
	const [createJobExperience, { loading, error }] = useMutation(
		CreateJobExperienceMutation
	)

	const handleSubmit = async (data: any) => {
		const educationsData = Object.keys(data).map(async (key: string) => {
			return await createJobExperience({
				variables: {
					...data[key],
				},
			})
		})
		const response = await Promise.all(educationsData)
		if (response) {
			// toast.success('Experience added successfully')
			handleNextStep()
		} else {
			toast.error('Something went wrong')
		}
	}

	return (
		<section>
			<HeaderSignup
				heading='Let’s dive into your experience'
				description=''
			/>
			<MultiForms
				formJson={formJson}
				handleSubmit={handleSubmit}
				formHeading='Experience'
				btnLoading={loading}
			/>
		</section>
	)
}

export default AddUserExperience
