import { useMutation } from '@apollo/client'
import React from 'react'
import { toast } from 'react-toastify'
import UpdatePFPMutation from '../../../graphql/mutations/update-pfp-mutation'
import UpdateProfileMutation from '../../../graphql/mutations/update-profile.mutation'
import { IFormType } from '../../../types/form.type'
import { filteredFormData } from '../../../utils/form.utils'
import Form from '../../reusable/Form'
import ImgUploader from '../../reusable/ImgUploader'
import Spinner from '../../reusable/Spinner'
import HeaderSignup from '../SignupHeader'

interface Iprops {
	handleNextStep: () => void
	formJson: IFormType[]
}

const AddUserProfile = ({ handleNextStep, formJson }: Iprops) => {
	const [updateProfile, { loading }] = useMutation(UpdateProfileMutation, {
		onCompleted: (data) => {
			// toast.success('Profile Updated Successfully!')
			handleNextStep()
			return
		},
		onError: (errors) => {
			toast.error(errors.message)
			return
		},
	})

	const [updatePFP, { loading: updatePFPLoading }] = useMutation(
		UpdatePFPMutation,
		{
			onCompleted: (data) => {
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
		const { data } = e
		setFormValues(data)
	}

	const [imgFile, setImgFile] = React.useState(null)
	const handleGetImg = (e: any) => {
		const { value } = e
		setImgFile(value)
	}

	const handleSubmit = async () => {
		if (!formValues) return
		const data = {
			...formValues,
		}
		const filteredData = filteredFormData(data)
		if (imgFile) await updatePFP({ variables: { pfp: imgFile } })
		await updateProfile({ variables: { ...filteredData } })
	}

	return (
		<div>
			<HeaderSignup
				heading='Let’s create your profile'
				description=''
			/>
			<main>
				<ImgUploader
					handleGetImg={handleGetImg}
					loading={updatePFPLoading}
				/>
				<section className='mt-0 mt-6'>
					<Form
						formJson={formJson}
						handleFormData={handleFormData}
						handleSubmit={handleSubmit}
						SubmitBtn={
							<div className='d-flex justify-content-end'>
								<button
									className='btn btn-danger btn-lg text-white'
									disabled={loading}>
									{loading || updatePFPLoading ? (
										<Spinner size='sm' />
									) : (
										'Continue'
									)}
								</button>
							</div>
						}
					/>
				</section>
			</main>
		</div>
	)
}

export default AddUserProfile
