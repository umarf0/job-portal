import { IFormType } from '../../../types/form.type'
import rolesJson from '../../roles.json'
import DropDown from '../../../components/reusable/DropDown'
import MultiSelect from '../../../components/reusable/MultiSelect'

const userProfileJson: IFormType[] = [
	{
		label: 'Current Role',
		placeholder: 'Current Role',
		type: 'dropdown',
		name: 'currentRole',
		value: '',
		error: 'Please select your current role',
		component: (props: any) => (
			<DropDown
				{...props}
				options={rolesJson}
			/>
		),
		cols: 'col-md-12',
	},
	{
		label: 'Open to the following roles',
		placeholder: 'Open to the following roles',
		type: 'multiselect',
		name: 'openToRoles',
		value: [],
		error: 'Please select at least one role',
		component: (props: any) => (
			<MultiSelect
				{...props}
				options={rolesJson}
			/>
		),
		cols: 'col-md-12',
	},
	{
		label: 'Bio',
		placeholder: 'Bio (max 280 characters)',
		type: 'textarea',
		name: 'bio',
		value: '',
		error: 'Please enter some thoughts about yourself',
		cols: 'col-md-12',
		maxLength: 280,
	},
	{
		label: 'Website',
		placeholder: 'Website',
		type: 'text',
		name: 'website',
		value: '',
		error: 'Please enter your website URL',
		cols: 'col-md-6',
	},
	{
		label: 'Linkedin',
		placeholder: 'Linkedin',
		type: 'text',
		name: 'linkedIn',
		value: '',
		error: 'Please enter your LinkedIn URL',
		cols: 'col-md-6',
	},
	{
		label: 'Github',
		placeholder: 'Github',
		type: 'text',
		name: 'github',
		value: '',
		error: 'Please enter your Github URL',
		cols: 'col-md-6',
	},
	{
		label: 'Twitter',
		placeholder: 'Twitter',
		type: 'text',
		name: 'twitter',
		value: '',
		error: 'Please enter your Twitter URL',
		cols: 'col-md-6',
	},
]

export default userProfileJson
