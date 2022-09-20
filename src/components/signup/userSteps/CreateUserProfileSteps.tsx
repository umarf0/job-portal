import Cookies from 'js-cookie'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import UserSignupSteps, {
	SignupStepsType,
} from '../../../json/forms/user/createUsersProfileSteps.json'
import { userLoginSuccess } from '../../../store/actions/user.action'
import { Routes } from '../../../types/routes.type'
import iStorage from '../../../utils/local-storage.utils'

const CreateUserProfileSteps = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [activeStep, setActiveStep] = React.useState(0)

	const handleNextStep = () => {
		if (activeStep < UserSignupSteps.length - 1) {
			setActiveStep(activeStep + 1)
		} else {
			const role = Cookies.get('role')
			if (role) {
				dispatch(userLoginSuccess(role))
				setTimeout(() => {
					navigate(Routes.Matches)
				}, 0)
			}
		}
	}

	React.useEffect(() => {
		const currentUserSignUpStep = iStorage.getCurrentUserSignUpStep()
		if (currentUserSignUpStep)
			setActiveStep(+JSON.parse(currentUserSignUpStep))
	}, [])

	React.useEffect(() => {
		iStorage.setCurrentUserSignUpStep(activeStep)
	}, [activeStep])

	return (
		<section>
			<section className='w-100 d-flex mt-md-0 mt-2 justify-content-between position-relative'>
				<img
					src='/assets/icons/straightDottedLine.svg'
					alt=''
					className='w-100 translate-center-middle top-26px'
					style={{ zIndex: '-1' }}
				/>
				{UserSignupSteps.map((step: SignupStepsType, index: number) => {
					return (
						<Step
							step={step}
							index={index}
							key={index}
							isActive={index <= activeStep}
						/>
					)
				})}
			</section>
			<main className='mt-8 bg-white px-md-7 px-5 pt-7 pb-6 rounded-5 shadow-sm'>
				{UserSignupSteps[activeStep].component({ handleNextStep })}
			</main>
		</section>
	)
}

interface Istep {
	step: SignupStepsType
	index: number
	isActive: boolean
}

const Step = ({ step, index, isActive }: Istep) => {
	return (
		<div className='center flex-column'>
			<div
				className={`w-45px h-45px rounded-circle center text-white mb-4 fw-bold fs-18 ${
					isActive ? 'bg-danger' : 'bg-dark-blue'
				}`}>
				{index + 1}.
			</div>
			<span className='position-absolute top-100'>{step.heading}</span>
		</div>
	)
}

export default CreateUserProfileSteps
