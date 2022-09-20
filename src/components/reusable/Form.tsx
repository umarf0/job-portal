import React, { useEffect } from 'react'
import { IFormType } from '../../types/form.type'
import { validateForm } from '../../utils/form.utils'
import InputError from './InputError'

interface Iprops {
	formJson: IFormType[]
	index?: number | string | undefined
	handleFormData: ({
		data,
		index,
	}: {
		data: any
		index?: number | string
	}) => void
	SubmitBtn?: React.ReactNode
	handleSubmit?: () => void
	isSubmitting?: boolean
}

const Form = ({
	formJson,
	index,
	handleFormData,
	SubmitBtn,
	handleSubmit,
	isSubmitting: isSubmittingProp,
}: Iprops) => {
	const [formValues, setFormValues] = React.useState<any>({})
	const [isSubmitting, setIsSubmitting] = React.useState(false)

	const handleInputChange = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		const { name, value } = e.target
		setFormValues({ ...formValues, [name]: value })
	}

	const handleGetComponentData = (e: any) => {
		const { name, data } = e
		setFormValues({ ...formValues, [name]: data })
	}

	React.useEffect(() => {
		handleFormData({ data: formValues, index })
	}, [formValues])

	React.useEffect(() => {
		let nameFields: any = {}
		formJson.forEach((field: any) => {
			nameFields[field.name] = field.value
		})
		setFormValues(nameFields)
	}, [formJson])

	useEffect(() => {
		setIsSubmitting(isSubmittingProp || false)
	}, [isSubmittingProp])

	return (
		<form
			className='row gy-5 gx-sm-4'
			onSubmit={(e) => {
				e.preventDefault()
				setIsSubmitting(true)
				validateForm(formJson, formValues) &&
					handleSubmit &&
					handleSubmit()
			}}>
			{formJson.map((item: IFormType) => {
				const value = formValues[item.name] || ''

				if (item.component) {
					return item.component({
						inputItem: item,
						handleGetComponentData,
						isSubmitting,
					})
				}

				if (item.type === 'textarea') {
					return (
						<div
							className={`${item.cols}`}
							key={item.name}>
							<label
								htmlFor={item.name}
								className='form-label'>
								{item.label}
								{item.required ? '*' : ''}
							</label>
							<textarea
								className={`form-control h-xs ${item.className}`}
								placeholder={item.placeholder}
								maxLength={item.maxLength}
								value={value}
								name={item.name}
								onChange={handleInputChange}
								id={item.name}></textarea>
							<InputError
								inputItem={item}
								isSubmitting={isSubmitting}
								value={value}
							/>
						</div>
					)
				}

				return (
					<div
						className={`${item.cols}`}
						key={item.name}>
						<label
							htmlFor={item.name}
							className='form-label w-100'>
							{item.label}
							{typeof item.label == 'string' && item.required
								? ' * '
								: ''}
						</label>
						<input
							className={`form-control ${item.className} form-control-lg`}
							type={item.type}
							placeholder={item.placeholder}
							id={item.name}
							value={value}
							name={item.name}
							onChange={handleInputChange}
						/>
						<InputError
							inputItem={item}
							isSubmitting={isSubmitting}
							value={value}
						/>
					</div>
				)
			})}
			{SubmitBtn}
		</form>
	)
}

export default Form
