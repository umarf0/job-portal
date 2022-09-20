import React from 'react'
import { IFormType, IOptionType } from '../../types/form.type'
import InputError from './InputError'

interface Iprops {
	options: IOptionType[]
	inputItem: IFormType
	handleGetComponentData: (e: { name: string; data: string }) => void
	isSubmitting: boolean
}

const CheckBoxes = ({
	options,
	inputItem,
	handleGetComponentData,
	isSubmitting,
}: Iprops) => {
	const [selectedCheckBox, setSelectedCheckBox] = React.useState<{
		name: string
		value: any
	}>({ name: '', value: '' })

	const handleChange = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		const { name, value } = e.target
		setSelectedCheckBox({ name, value })
		handleGetComponentData({ name, data: value })
	}

	React.useEffect(() => {
		setSelectedCheckBox({ name: inputItem.name, value: inputItem.value })
	}, [inputItem])

	return (
		<section className={`${inputItem.cols}`}>
			<label className='form-label'>
				<span className='me-1'>{inputItem.label}</span>
				<span>{inputItem.required && '*'}</span>
			</label>
			<div className='d-flex mt-2 flex-wrap'>
				{options.map((option: IOptionType, index: number) => {
					return (
						<CheckBox
							option={option}
							key={index}
							selectedValue={selectedCheckBox.value}
							handleChange={handleChange}
						/>
					)
				})}
			</div>
			<InputError
				inputItem={inputItem}
				isSubmitting={isSubmitting}
				value={selectedCheckBox.value}
			/>
		</section>
	)
}

interface ICheckBoxProps {
	option: IOptionType
	selectedValue: any
	handleChange: (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => void
}

const CheckBox = ({ option, handleChange, selectedValue }: ICheckBoxProps) => {
	return (
		<section className='form-check me-5 mb-3'>
			<input
				className='form-check-input'
				type='radio'
				name={option.name}
				id={option.name}
				checked={selectedValue === option.value}
				value={option.value}
				onChange={handleChange}
			/>
			<label
				className='form-check-label'
				htmlFor={option.name}>
				{option.label}
			</label>
		</section>
	)
}

export default CheckBoxes
