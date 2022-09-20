import { IFormType } from '../../../types/form.type'
import hereToJson from '../../here-to.json'
import DropDown from '../../../components/reusable/DropDown'
import CheckBoxes from '../../../components/reusable/CheckBoxes'
import preferenceJson from '../../preference.json'

const userPreferencesJson: IFormType[] = [
	{
		label: 'Status',
		placeholder: 'Status',
		type: 'checkBoxes',
		name: 'status',
		value: '',
		error: 'Please select atleast one option',
		cols: 'col-md-6',
		required: true,
		component: (props: any) => (
			<CheckBoxes {...props} options={preferenceJson} />
		),
	},
	{
		label: 'Here To',
		placeholder: 'Here To',
		type: 'dropdown',
		name: 'hereTo',
		value: '',
		error: 'Please select atleast one option',
		required: true,
		component: (props: any) => <DropDown {...props} options={hereToJson} />,
		cols: 'col-md-6',
	},
]

export default userPreferencesJson
