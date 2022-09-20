import { IFormType } from '../../../types/form.type'
import MultiSelect from '../../../components/reusable/MultiSelect'
import markeetsJson from '../../markeets.json'

const companyProfileJson: IFormType[] = [
	{
		label: 'Company Name',
		placeholder: 'Company Name',
		type: 'text',
		name: 'name',
		value: '',
		error: 'Please enter company name',
		cols: 'col-md-6',
		required: true,
	},
	{
		label: 'Website',
		placeholder: 'Website',
		type: 'text',
		name: 'website',
		value: '',
		error: 'Please enter website url',
		cols: 'col-md-6',
	},
	{
		label: 'Linkedin',
		placeholder: 'Linkedin',
		type: 'text',
		name: 'linkedin',
		value: '',
		error: 'Please enter linkedin url',
		cols: 'col-md-6',
	},
	{
		label: 'Github',
		placeholder: 'Github',
		type: 'text',
		name: 'github',
		value: '',
		error: 'Please enter github url',
		cols: 'col-md-6',
	},
	{
		label: 'Twitter',
		placeholder: 'Twitter',
		type: 'text',
		name: 'twitter',
		value: '',
		error: 'Please enter twitter url',
		cols: 'col-md-6',
	},
	{
		label: 'Markets',
		placeholder: 'Markets',
		type: 'multiselect',
		name: 'markets',
		value: '',
		error: 'Please select markets',
		required: true,
		component: (props: any) => (
			<MultiSelect {...props} options={markeetsJson} />
		),
		cols: 'col-md-6',
	},
	{
		label: 'Elevator Pitch',
		placeholder: 'Elevator Pitch (Max 280 characters)',
		type: 'textarea',
		name: 'elevatorPitch',
		value: '',
		error: 'Please enter elevator pitch',
		cols: 'col-md-12',
		required: true,
		maxLength: 280,
	},
]

export default companyProfileJson
