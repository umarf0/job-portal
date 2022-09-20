import React from 'react'
import { IDropdownOptionType } from '../../types/form.type'
import InputError from './InputError'
interface Iprops {
	inputItem: any
	handleGetComponentData: (e: any) => void
	options: IDropdownOptionType[]
	isSubmitting: boolean
}

const MultiSelect = ({
	inputItem,
	handleGetComponentData,
	options,
	isSubmitting,
}: Iprops) => {
	const [values, setValue] = React.useState<IDropdownOptionType[]>([])
	const [searchValue, setSearchValue] = React.useState('')
	const [optionsVales, setOptionsVales] =
		React.useState<IDropdownOptionType[]>(options)
	const [error, setError] = React.useState('')

	const handleSelectChange = (option: IDropdownOptionType) => {
		if (
			values.find(
				(item: IDropdownOptionType) => item.value === option.value
			)
		) {
			handleRemoveItem(option.value)
		} else {
			setValue([...values, option])
		}
	}

	const handleRemoveItem = (value: string) => {
		setValue(
			values.filter((item: IDropdownOptionType) => item.value !== value)
		)
	}

	const handleSearch = (e: any) => {
		const { value } = e.target
		setSearchValue(value)
		const filteredOptions = options.filter((option: IDropdownOptionType) =>
			option.label.toLowerCase().includes(value.toLowerCase())
		)
		if (filteredOptions.length === 0) {
			setError('No results found')
		} else {
			setError('')
		}
		setOptionsVales(filteredOptions)
	}

	React.useEffect(() => {
		const data = values.map((item: IDropdownOptionType) => item.value)
		handleGetComponentData({ data, name: inputItem.name })
	}, [values])

	React.useEffect(() => {
		inputItem.value &&
			setValue(
				optionsVales.filter((option: IDropdownOptionType) =>
					inputItem.value.includes(option.value)
				)
			)
	}, [inputItem])

	return (
		<div>
			<div className='dropdown'>
				<label className='form-label'>
					<span className='me-1'>{inputItem.label}</span>
					<span>{inputItem.required ? '*' : ''}</span>
				</label>
				<button
					className='btn btn-secondary form-control-lg dropdown-toggle w-100 d-flex justify-content-between align-items-center'
					type='button'
					id='dropdownMenuButton1'
					data-bs-toggle='dropdown'
					data-bs-auto-close='outside'
					aria-expanded='false'>
					{inputItem.placeholder}
				</button>
				<ul
					className='dropdown-menu custom-scrollbar-y'
					style={{ maxHeight: '300px' }}
					aria-labelledby='dropdownMenuButton1'>
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
								key={option.value}>
								<div className='form-check'>
									<input
										className='form-check-input'
										type='checkbox'
										value=''
										id={option.value}
										checked={values.includes(option)}
										onChange={() =>
											handleSelectChange(option)
										}
									/>
									<label
										className='form-check-label w-100 h-100 cursor'
										htmlFor={option.value}>
										{option.label}
									</label>
								</div>
							</li>
						)
					})}
					{error && (
						<span className='text-danger center py-3'>
							{error && error}
						</span>
					)}
				</ul>
				<InputError
					inputItem={inputItem}
					isSubmitting={isSubmitting}
					value={values}
				/>
				{values.length > 0 && (
					<footer className='d-flex flex-wrap'>
						{values.map((option: IDropdownOptionType) => {
							return (
								<div
									key={option.value}
									className='btn bg-danger text-white rounded-pill me-3 py-7px side-center mt-4'>
									<span>{option.label}</span>
									<div
										className='w-23px h-23px bg-white ms-4 rounded-circle text-dark center'
										onClick={() =>
											handleRemoveItem(option.value)
										}>
										<i className='fa-solid fa-xmark fs-14'></i>
									</div>
								</div>
							)
						})}
					</footer>
				)}
			</div>
		</div>
	)
}

export default MultiSelect
