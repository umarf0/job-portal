import DropDown from '../../../components/reusable/DropDown'
import { IMultiFormProps } from '../../../types/form.type'
import degreeJson from '../../degrees.json'

const userEducationJson: IMultiFormProps = {
	0: [
		{
			label: 'School',
			placeholder: 'School',
			type: 'text',
			name: 'school',
			value: '',
			error: 'Please enter your school name',
			cols: 'col-md-6 col-lg-4',
			className: 'bg-white form-control-lg',
			required: true,
		},
		{
			label: 'Graduation Date',
			placeholder: 'Graduation Date',
			type: 'date',
			name: 'graduation',
			value: '',
			error: 'Please enter your graduation date',
			cols: 'col-md-6 col-lg-4',
			className: 'bg-white form-control-lg',
		},
		{
			label: 'Degree Type',
			placeholder: 'Degree Type',
			type: 'dropdown',
			name: 'degreeType',
			value: '',
			error: 'Please select your degree type',
			cols: 'col-md-6 col-lg-4',
			component: (props: any) => (
				<DropDown
					{...props}
					dropDownBtnClass={'bg-white form-control-lg'}
					options={degreeJson}
				/>
			),
		},
	],
}

export default userEducationJson
