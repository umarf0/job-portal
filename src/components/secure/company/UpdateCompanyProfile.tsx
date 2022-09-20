import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { toast } from 'react-toastify'
import UpdateCompanyMutation from '../../../graphql/mutations/update-company-mutation'
import UpdatePFPMutation from '../../../graphql/mutations/update-pfp-mutation'
import MeQuery from '../../../graphql/queries/me.query'
import companyProfileJson from '../../../json/forms/company/companyProfile.json'
import { IFormType } from '../../../types/form.type'
import Form from '../../reusable/Form'
import ImgUploader from '../../reusable/ImgUploader'
import Spinner from '../../reusable/Spinner'

const UpdateCompanyProfile = () => {
	const { data: meData } = useQuery(MeQuery)

	const [updateCompany, { loading }] = useMutation(UpdateCompanyMutation, {
		onCompleted: (data) => {
			// toast.success('Profile updated successfully')
		},
		onError: (error) => {
			toast.error('Error updating profile')
		},
	})
	const [updatePFP, { loading: loadingUpdatePFP }] = useMutation(
		UpdatePFPMutation,
		{
			onError: (error) => {
				toast.error('Error updating profile picture')
			},
			update: (cache, { data: { updatePFP } }) => {
				const { me }: any = cache.readQuery({ query: MeQuery })
				cache.writeQuery({
					query: MeQuery,
					data: {
						me: {
							...me,
							pfp: updatePFP.pfp,
						},
					},
				})
			},
		}
	)

	const [logoImg, setLogoImg] = React.useState(null)

	const [formValues, setFormValues] = React.useState<any>(null)

	const [updatedFormJson, setUpdatedFormJson] =
		React.useState<IFormType[]>(companyProfileJson)

	React.useEffect(() => {
		if (meData) {
			const newFormJson = companyProfileJson.map((form: IFormType) => ({
				...form,
				value: meData.me.company[form.name],
			}))
			setUpdatedFormJson(newFormJson)
			setLogoImg(meData.me.pfp)
		}
	}, [meData])

	const handleFormData = (e: any) => {
		const { index, data } = e
		setFormValues(data)
	}

	const handleGetImg = (e: any) => {
		const { name, value } = e
		setLogoImg(value)
	}

	const handleSubmit = () => {
		if (logoImg && meData.me.pfp !== logoImg)
			updatePFP({ variables: { pfp: logoImg } })

		if (formValues)
			updateCompany({
				variables: {
					...formValues,
					updateCompanyId: meData?.me?.company?.id,
				},
			})
	}

	return (
		<section className='pe-md-4'>
			<section className='mb-7'>
				<ImgUploader
					handleGetImg={handleGetImg}
					loading={loadingUpdatePFP}
					defaultImg={meData?.me?.pfp}
					label='Choose Company Logo'
				/>
			</section>
			{
				<Form
					formJson={updatedFormJson}
					handleFormData={handleFormData}
					handleSubmit={handleSubmit}
					SubmitBtn={
						<div className='d-flex justify-content-end mt-7'>
							<button
								className='btn btn-danger text-white btn-lg'
								disabled={loading}
								onClick={handleSubmit}>
								{loading ? <Spinner size='sm' /> : 'Continue'}
							</button>
						</div>
					}
				/>
			}
		</section>
	)
}

export default UpdateCompanyProfile
