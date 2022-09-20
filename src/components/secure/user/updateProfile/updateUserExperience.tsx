import { useMutation, useQuery } from '@apollo/client'
import React, { memo } from 'react'
import { toast } from 'react-toastify'
import CreateJobExperienceMutation from '../../../../graphql/mutations/create-job-experience.mutation'
import UpdateJobExperienceMutation from '../../../../graphql/mutations/update-job-exeprience.mutation'
import MeQuery from '../../../../graphql/queries/me.query'
import { IMultiFormProps } from '../../../../types/form.type'
import MultiForms from '../../../reusable/MultiForms'

interface Iprops {
	handleNextStep: () => void
	formJson: IMultiFormProps
}

const UpdateUserExperience = ({ handleNextStep, formJson }: Iprops) => {
	const {
		data: meData,
		loading: meLoading,
		error: meError,
	} = useQuery(MeQuery)

	const [createExperience, { loading: createExperienceLoading }] =
		useMutation(CreateJobExperienceMutation)

	const [updateExperience, { loading: updateExperienceLoading }] =
		useMutation(UpdateJobExperienceMutation)

	const [updatedFormJson, setUpdatedFormJson] =
		React.useState<IMultiFormProps>(formJson)

	React.useEffect(() => {
		const userExperience = meData?.me?.jobExperience
		let newFormJson: any = {}
		if (userExperience) {
			userExperience.forEach((Experience: any) => {
				const form = formJson[0].map((form: any) => {
					return {
						...form,
						value: Experience[form.name],
					}
				})
				newFormJson[Experience.id] = form
			})
		}
		setUpdatedFormJson(newFormJson)
	}, [meData])

	const handleSubmit = async (data: any) => {
		const experienceForUpdate: any = {}
		const experienceForCreate: any = {}
		const experienceIds: string[] = meData?.me?.jobExperience?.map(
			(education: any) => {
				return education.id
			}
		)
		Object.keys(data).forEach((key: string) => {
			if (experienceIds?.includes(key)) {
				experienceForUpdate[key] = data[key]
			} else {
				experienceForCreate[key] = data[key]
			}
		})

		if (Object.keys(experienceForUpdate).length > 0) {
			const experienceData = Object.keys(experienceForUpdate).map(
				async (key: string) => {
					return await updateExperience({
						variables: {
							updateJobExperienceId: key,
							...experienceForUpdate[key],
						},
					})
				}
			)
			const response = await Promise.all(experienceData)
			if (response.length > 0) {
				// toast.success('Experience updated successfully')
				handleNextStep()
			}
		}

		if (Object.keys(experienceForCreate).length > 0) {
			const experienceData = Object.keys(experienceForCreate).map(
				async (key: string) => {
					return await createExperience({
						variables: {
							...experienceForCreate[key],
						},
					})
				}
			)
			const response = await Promise.all(experienceData)
			if (response.length > 0) {
				// toast.success('Experience created successfully')
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
				formHeading='Experience'
				btnLoading={updateExperienceLoading || createExperienceLoading}
				hideDeleteBtn={true}
			/>
		</section>
	)
}

export default memo(UpdateUserExperience)
