import React from 'react'
import { IMultiFormProps, IFormType } from '../../types/form.type'
import { validateMultiForm } from '../../utils/form.utils'
import Form from './Form'
import Spinner from './Spinner'

interface Iprops {
	formJson: IMultiFormProps
	handleSubmit: (data: any) => void
	formHeading: string
	btnLoading: boolean
	hideDeleteBtn?: boolean
}

const MultiForms = ({
	formJson,
	handleSubmit,
	formHeading,
	btnLoading,
	hideDeleteBtn,
}: Iprops) => {
	const [formJsonData, setFormJsonData] =
		React.useState<IMultiFormProps>(formJson)

	React.useEffect(() => {
		setFormJsonData(formJson)
		setFormValues(null)
	}, [formJson])

	const [formValues, setFormValues] = React.useState<any>(null)

	const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)

	const createNewForm = () => {
		const formJsonDatakeys = Object.keys(formJsonData)
		const newKey = formJsonDatakeys[+formJsonDatakeys.length - 1] + 1
		const newForm = formJsonData[formJsonDatakeys[0]].map(
			(form: IFormType) => ({
				...form,
				value: '',
			})
		)

		const newFormJson = {
			...formJsonData,
			[newKey]: newForm,
		}
		setFormJsonData(newFormJson)
	}

	const deleteForm = (key: number | string) => {
		const newFormJson = { ...formJsonData }
		const newFormValues = { ...formValues }
		delete newFormValues[key]
		delete newFormJson[key]
		setFormJsonData(newFormJson)
		setFormValues(newFormValues)
	}

	const handleFormData = (e: any) => {
		const { index, data } = e
		const newFormValues = { ...formValues }
		newFormValues[index] = data
		setFormValues(newFormValues)
	}

	return (
		<div>
			<section className='d-flex justify-content-between align-items-center'>
				<h6 className='mb-0'>{formHeading}</h6>
				<i
					className='fa-solid fa-circle-plus cursor text-danger'
					style={{ fontSize: '35px' }}
					onClick={createNewForm}></i>
			</section>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					setIsSubmitting(true)
					validateMultiForm(formJson, formValues) &&
						handleSubmit(formValues)
				}}>
				{Object.keys(formJsonData).map((key: string) => {
					return (
						<section
							className='bg-light px-3 py-6 mt-5 rounded-3 position-relative'
							key={key}>
							{!hideDeleteBtn && (
								<button
									className='btn bg-danger position-absolute top-15px end-15px w-25px h-25px rounded-circle center p-0'
									onClick={() => deleteForm(key)}
									disabled={
										Object.keys(formJsonData).length <= 1
									}>
									<i className='fa-solid fa-minus text-white'></i>
								</button>
							)}
							<Form
								formJson={formJsonData[key]}
								key={key}
								index={key}
								isSubmitting={isSubmitting}
								handleFormData={handleFormData}
							/>
						</section>
					)
				})}
				<footer className='mt-6'>
					<div className='d-flex justify-content-end'>
						<button
							className='btn btn-danger btn-lg text-white'
							type='submit'
							disabled={btnLoading}>
							{btnLoading ? <Spinner size='sm' /> : 'Continue'}
						</button>
					</div>
				</footer>
			</form>
		</div>
	)
}

export default MultiForms
