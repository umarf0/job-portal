import React from 'react'
import { IDropdownOptionType, IFormType } from '../../types/form.type'
import InputError from './InputError'

interface Iprops {
	inputItem: IFormType
	handleGetComponentData: (e: { name: string; data: string }) => void
	options: IDropdownOptionType[]
	dropDownBtnClass?: string
	isSubmitting: boolean
}

const DropDown = ({
	inputItem,
	handleGetComponentData,
	options,
	dropDownBtnClass,
	isSubmitting,
}: Iprops) => {
	const [optionsVales, setOptionsVales] =
		React.useState<IDropdownOptionType[]>(options)
	const [value, setValue] = React.useState<any>('')
	const [searchValue, setSearchValue] = React.useState('')
	const [error, setError] = React.useState('')

	React.useEffect(() => {
		inputItem.value && setValue(inputItem.value)
	}, [inputItem.value])

	const handleSelectChange = (option: IDropdownOptionType) => {
		setValue(option.value)
		handleGetComponentData({
			name: inputItem.name,
			data: option.value,
		})
		setOptionsVales(options)
		setSearchValue('')
	}

	const handleSearch = (e: any) => {
		const { value } = e.target
		setSearchValue(value)
		const filteredOptions = options.filter((option: IDropdownOptionType) =>
			option.label.toLowerCase().includes(value.toLowerCase())
		)
		filteredOptions.length === 0
			? setError('No results found')
			: setError('')
		setOptionsVales(filteredOptions)
	}

	return (
		<div className={inputItem.cols}>
			<label className='form-label'>
				<span className='me-1'>{inputItem.label}</span>
				<span>{inputItem.required && '*'}</span>
			</label>
			<div className='dropdown'>
				<button
					className={`btn dropdown-toggle bg-secondary form-control-lg w-100 d-flex justify-content-between align-items-center ${dropDownBtnClass}`}
					type='button'
					id='dropdownMenuButton1'
					data-bs-toggle='dropdown'
					aria-expanded='false'>
					{options.find(
						(item: IDropdownOptionType) => item.value === value
					)?.label || inputItem.placeholder}
				</button>
				<ul
					className='dropdown-menu custom-scrollbar-y'
					aria-labelledby='dropdownMenuButton1'
					style={{ maxHeight: '300px' }}>
					<input
						type='text'
						className='form-control py-2 rounded-0 mb-2'
						placeholder='Search'
						onChange={handleSearch}
						value={searchValue}
					/>
					{optionsVales.map((option: IDropdownOptionType) => {
						return (
							<li
								className='dropdown-item'
								key={option.value}
								onClick={() => handleSelectChange(option)}>
								{option.label}
							</li>
						)
					})}
					{error && (
						<span className='text-danger center py-3'>
							{error && error}
						</span>
					)}
				</ul>
			</div>
			<InputError
				inputItem={inputItem}
				isSubmitting={isSubmitting}
				value={value}
			/>
		</div>
	)
}

export default DropDown
