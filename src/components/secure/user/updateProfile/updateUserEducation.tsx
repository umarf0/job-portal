import { useMutation, useQuery } from '@apollo/client'
import React, { memo } from 'react'
import { toast } from 'react-toastify'
import CreateEducationMutation from '../../../../graphql/mutations/create-education.mutation'
import UpdateEducationMutation from '../../../../graphql/mutations/update-education.mutation'
import MeQuery from '../../../../graphql/queries/me.query'
import { IMultiFormProps } from '../../../../types/form.type'
import MultiForms from '../../../reusable/MultiForms'

interface Iprops {
	handleNextStep: () => void
	formJson: IMultiFormProps
}

const UpdateUserEducation = ({ handleNextStep, formJson }: Iprops) => {
	const {
		data: meData,
		loading: meLoading,
		error: meError,
	} = useQuery(MeQuery)

	const [createEducation, { loading: createEducationLoading }] = useMutation(
		CreateEducationMutation
	)

	const [updateEducation, { loading: updateEducationLoading }] = useMutation(
		UpdateEducationMutation
	)

	const [updatedFormJson, setUpdatedFormJson] =
		React.useState<IMultiFormProps>(formJson)

	React.useEffect(() => {
		const userEducation = meData?.me?.education
		let newFormJson: any = {}
		if (userEducation) {
			userEducation.forEach((education: any) => {
				const form = formJson[0].map((form: any) => {
					return {
						...form,
						value: education[form.name],
					}
				})
				newFormJson[education.id] = form
			})
		}
		setUpdatedFormJson(newFormJson)
	}, [meData])

	const handleSubmit = async (data: any) => {
		const educationsForUpdate: any = {}
		const educationsForCreate: any = {}
		const educationsIds: string[] = meData?.me?.education?.map(
			(education: any) => {
				return education.id
			}
		)
		Object.keys(data).forEach((key: string) => {
			if (educationsIds?.includes(key)) {
				educationsForUpdate[key] = data[key]
			} else {
				educationsForCreate[key] = data[key]
			}
		})

		if (Object.keys(educationsForUpdate).length > 0) {
			const educationsData = Object.keys(educationsForUpdate).map(
				async (key: string) => {
					return await updateEducation({
						variables: {
							updateEducationId: key,
							...educationsForUpdate[key],
						},
					})
				}
			)
			const response = await Promise.all(educationsData)
			if (response.length > 0) {
				// toast.success('Education updated successfully')
				handleNextStep()
			}
		}

		if (Object.keys(educationsForUpdate).length > 0) {
			const educationsData = Object.keys(educationsForCreate).map(
				async (key: string) => {
					return await createEducation({
						variables: {
							...educationsForCreate[key],
						},
					})
				}
			)
			const response = await Promise.all(educationsData)
			if (response.length > 0) {
				// toast.success('Education created successfully')
				handleNextStep()
			}
		}
	}

	return (
		<section>
			<MultiForms
				formJson={
					Object.keys(updatedFormJson).length === 0
						? formJson
						: updatedFormJson
				}
				handleSubmit={handleSubmit}
				formHeading='Education'
				btnLoading={updateEducationLoading || createEducationLoading}
				hideDeleteBtn={true}
			/>
		</section>
	)
}

export default memo(UpdateUserEducation)
