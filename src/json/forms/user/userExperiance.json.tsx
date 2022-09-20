import { IFormType } from '../../../types/form.type'

const userExperianceJson: IFormType[][] = [
	[
		{
			label: 'Company',
			placeholder: 'Company',
			type: 'text',
			name: 'company',
			value: '',
			error: 'Please enter your last/current company name',
			cols: 'col-md-6',
			className: 'bg-white form-control-lg',
			required: true,
		},
		{
			label: 'Title',
			placeholder: 'Title',
			type: 'text',
			name: 'title',
			value: '',
			error: 'Please enter your last/current job title',
			cols: 'col-md-6',
			className: 'bg-white form-control-lg',
			required: true,
		},
		{
			label: 'Start Date',
			placeholder: 'Start Date',
			type: 'date',
			name: 'startDate',
			value: '',
			error: 'Please enter the date when you started working',
			cols: 'col-md-6',
			className: 'bg-white form-control-lg',
			required: true,
		},
		{
			label: 'End Date',
			placeholder: 'End Date',
			type: 'date',
			name: 'endDate',
			value: '',
			error: 'Please enter the date when you stopped working',
			cols: 'col-md-6',
			className: 'bg-white form-control-lg',
			required: true,
		},
	],
]

export default userExperianceJson
