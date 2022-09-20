import { IFormType, IMultiFormProps } from '../types/form.type'

export const validateForm = (formJson: IFormType[], formValues: any) => {
	const requiredFields = formJson
		.filter((item: IFormType) => item.required)
		.map((item: any) => item.name)
	const isValid = requiredFields.every((item: any) => formValues[item])
	return isValid
}

export const validateMultiForm = (
	formJson: IMultiFormProps,
	formValues: any
) => {
	const requiredFields = Object.keys(formJson).map((key: string) =>
		formJson[key]
			.filter((item: IFormType) => item.required)
			.map((item: any) => item.name)
	)[0]

	const isValid = requiredFields.every((item: any) =>
		Object.keys(formValues).every((key: string) => formValues[key][item])
	)
	return isValid
}

export const filteredFormData = (data: any) => {
	return Object.keys(data).reduce((acc: any, key: any) => {
		if (data[key] || data[key].length !== 0) acc[key] = data[key]
		return acc
	}, {})
}
