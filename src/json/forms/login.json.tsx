import { IFormType } from '../..//types/form.type'

const LoginJson: IFormType[] = [
	{
		label: 'Email Address',
		placeholder: 'Email Address',
		type: 'email',
		name: 'email',
		value: '',
		error: 'Please enter a valid email address',
		cols: 'col-md-12',
		required: true,
	},
	{
		label: (
			<div className='d-flex justify-content-between w-100 mb-1'>
				<span>Password *</span>
				<a href='' className='text-decoration-underline'>
					Forgot Password?
				</a>
			</div>
		),
		placeholder: 'Password',
		type: 'password',
		name: 'password',
		value: '',
		error: 'Please enter password',
		cols: 'col-md-12',
		required: true,
	},
]

export default LoginJson
