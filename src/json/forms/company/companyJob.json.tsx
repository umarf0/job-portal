import { IFormType } from '../../../types/form.type'
import jobTypesJson from '../../job-types.json'
import rolesJson from '../../roles.json'
import DropDown from '../../../components/reusable/DropDown'
import MultiSelect from '../../../components/reusable/MultiSelect'

const companyJobJson: IFormType[] = [
	{
		label: 'Job title',
		placeholder: 'Job title',
		type: 'text',
		name: 'title',
		value: '',
		error: 'Please enter a job title',
		cols: 'col-md-6',
		required: true,
	},
	{
		label: 'Job Type',
		placeholder: 'Job Type',
		type: 'dropdown',
		name: 'jobType',
		value: '',
		error: 'Please select a job type',
		cols: 'col-md-6',
		component: (props: any) => (
			<DropDown {...props} options={jobTypesJson} />
		),
		required: true,
	},
	{
		label: 'Roles',
		placeholder: 'Roles',
		type: 'multiSelect',
		name: 'roles',
		value: [],
		error: 'Please select at least one role',
		cols: 'col-12',
		component: (props: any) => (
			<MultiSelect {...props} options={rolesJson} />
		),
		required: true,
	},
	{
		label: 'About',
		placeholder: 'About',
		type: 'textarea',
		name: 'about',
		value: '',
		error: 'Please enter a job description',
		cols: 'col-12',
		required: true,
	},
]

export default companyJobJson
