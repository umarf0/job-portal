export interface IFormType {
	id?: string
	name: string
	placeholder: string
	label: string | JSX.Element | undefined
	error: string
	value: string | number | boolean | null | any[] | object
	type: string
	required?: boolean
	options?: IOptionType[]
	disabled?: boolean
	component?: ({
		inputItem,
		handleGetComponentData,
		isSubmitting,
	}: {
		inputItem: IFormType
		handleGetComponentData: (e: any) => void
		isSubmitting: boolean
	}) => JSX.Element | null
	className?: string
	cols?: string
	minLength?: number
	maxLength?: number
}

export interface IOptionType {
	label: string
	name: string
	value: string
	isChecked: boolean
}

export interface IMultiFormProps {
	[key: string]: IFormType[]
}

export interface IDropdownOptionType {
	label: string
	value: string
}
