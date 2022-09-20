import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { toast } from 'react-toastify'
import UpdatePFPMutation from '../../../../graphql/mutations/update-pfp-mutation'
import UpdateProfileMutation from '../../../../graphql/mutations/update-profile.mutation'
import MeQuery from '../../../../graphql/queries/me.query'
import { IFormType } from '../../../../types/form.type'
import Form from '../../../reusable/Form'
import ImgUploader from '../../../reusable/ImgUploader'
import Spinner from '../../../reusable/Spinner'

interface Iprops {
	handleNextStep: () => void
	formJson: IFormType[]
}

const UpdateUserProfile = ({ handleNextStep, formJson }: Iprops) => {
	const {
		data: meData,
		loading: meLoading,
		error: meError,
	} = useQuery(MeQuery)

	const [updateProfile, { loading, error }] = useMutation(
		UpdateProfileMutation,
		{
			onCompleted: (data) => {
				// toast.success('Profile Updated Successfully!')
				handleNextStep()
				return
			},
			onError: (errors) => {
				toast.error(errors.message)
				return
			},
			update: (cache, { data: { updateProfile } }) => {
				const { me }: any = cache.readQuery({ query: MeQuery })
				cache.writeQuery({
					query: MeQuery,
					data: { me: { ...me, ...updateProfile } },
				})
			},
		}
	)

	const [updatePFP, { loading: updatePFPLoading, error: updatePFPError }] =
		useMutation(UpdatePFPMutation, {
			onCompleted: (data) => {
				// toast.success('Profile Picture Updated Successfully!')
				return
			},
			onError: (errors) => {
				toast.error(errors.message)
				return
			},
			update: (cache, { data: { updatePFP } }) => {
				const { me }: any = cache.readQuery({ query: MeQuery })
				cache.writeQuery({
					query: MeQuery,
					data: { me: { ...me, pfp: updatePFP.pfp } },
				})
			},
		})

	const [formValues, setFormValues] = React.useState<any>(null)
	const [imgFile, setImgFile] = React.useState(null)

	const [updatedFormJson, setUpdatedFormJson] =
		React.useState<IFormType[]>(formJson)

	React.useEffect(() => {
		if (meData) {
			const newFormJson = formJson.map((form: IFormType) => ({
				...form,
				value: meData.me[form.name],
			}))
			setUpdatedFormJson(newFormJson)
			setImgFile(meData.me.pfp)
		}
	}, [meData])

	const handleGetImg = (e: any) => {
		const { name, value } = e
		setImgFile(value)
	}

	const handleFormData = (e: any) => {
		const { index, data } = e
		setFormValues(data)
	}

	const handleSubmit = async () => {
		if (imgFile) await updatePFP({ variables: { pfp: imgFile } })
		await updateProfile({ variables: { ...formValues } })
	}

	return (
		<div>
			<main>
				<ImgUploader
					handleGetImg={handleGetImg}
					loading={updatePFPLoading}
					defaultImg={imgFile}
				/>
				<section className='mt-7'>
					<Form
						formJson={updatedFormJson}
						handleFormData={handleFormData}
						handleSubmit={handleSubmit}
						SubmitBtn={
							<div className='d-flex justify-content-end'>
								<button
									className='btn btn-danger btn-lg text-white '
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

export default UpdateUserProfile
