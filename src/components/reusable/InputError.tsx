import { IFormType } from '../../types/form.type'

interface Iprops {
	isSubmitting: boolean
	inputItem: IFormType
	value: any
}

const InputError = ({ isSubmitting, inputItem, value }: Iprops) => {
	return (
		<>
			{isSubmitting &&
				inputItem.required &&
				(value === '' || value.length === 0 || !value) && (
					<div className='text-danger text-error mt-2 ms-1 text-capitalize fs-14 '>
						{inputItem.error}
					</div>
				)}
		</>
	)
}

export default InputError
