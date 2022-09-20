import { Link } from 'react-router-dom'
import { Routes } from '../../types/routes.type'

const SignUpFooter = () => {
	return (
		<footer>
			<div className='text-center mt-5'>
				<Link to={Routes.Login} className='text-decoration-underline'>
					Already have account?
				</Link>
			</div>
			{/*<div className='text-center mt-4'>*/}
			{/*	<span>OR</span>*/}
			{/*</div>*/}
			{/*<div className='d-grid mt-5'>*/}
			{/*	<button className='btn btn-light text-dark p-3' type='button'>*/}
			{/*		<img*/}
			{/*			src='/assets/imgs/google.png'*/}
			{/*			className='me-3 h-15px w-15px'*/}
			{/*			alt=''*/}
			{/*		/>*/}
			{/*		Continue with Google*/}
			{/*	</button>*/}
			{/*</div>*/}
			{/*<div className='d-grid mt-3'>*/}
			{/*	<button*/}
			{/*		className='btn bg-primary bg-opacity-75 text-white p-3'*/}
			{/*		type='button'>*/}
			{/*		<img*/}
			{/*			src='/assets/imgs/Facebook.png'*/}
			{/*			className='me-3 h-15px w-15px'*/}
			{/*			alt=''*/}
			{/*		/>*/}
			{/*		Continue with facebook*/}
			{/*	</button>*/}
			{/*</div>*/}
			<div className='mt-5 text-center'>
				<small>
					By clicking Register, you agree to Molerat’s{' '}
					<span style={{ textDecoration: 'underline' }}>
						Terms of Use
					</span>{' '}
					and{' '}
					<span style={{ textDecoration: 'underline' }}>
						Privacy Policy
					</span>
				</small>
			</div>
		</footer>
	)
}

export default SignUpFooter
