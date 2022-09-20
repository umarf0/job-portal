import React from 'react'
import PreviousNavigationBtn from '../../../components/reusable/BtnPrevNavigation'
import updateUserProfileSteps from '../../../json/forms/user/updateUserProfileSteps'

const UserUpdateProfile = () => {
	const [activeStepIndex, setActiveStepIndex] = React.useState(0)
	const handleNextStep = () => setActiveStepIndex(activeStepIndex + 1)

	return (
		<div>
			<header className='mb-5'>
				<PreviousNavigationBtn />
				<h4 className='mb-1'>User Profile</h4>
			</header>
			<ul className='nav nav-pills bg-light p-2 rounded-7 nav-fill d-flex flex-nowrap overflow-auto custom-scrollbar-x'>
				<li
					className='nav-item cursor'
					onClick={() => setActiveStepIndex(0)}>
					<span
						className={` nav-link ${
							activeStepIndex === 0 && 'active'
						}`}>
						Profile
					</span>
				</li>
				<li
					className='nav-item cursor'
					onClick={() => setActiveStepIndex(1)}>
					<span
						className={` nav-link ${
							activeStepIndex === 1 && 'active'
						}`}>
						Education
					</span>
				</li>
				<li
					className='nav-item cursor'
					onClick={() => setActiveStepIndex(2)}>
					<span
						className={` nav-link ${
							activeStepIndex === 2 && 'active'
						}`}>
						Experience
					</span>
				</li>
				<li
					className='nav-item cursor'
					onClick={() => setActiveStepIndex(3)}>
					<span
						className={` nav-link ${
							activeStepIndex === 3 && 'active'
						}`}>
						Preferences
					</span>
				</li>
			</ul>
			<main className='mt-6 w-100 mx-auto'>
				{updateUserProfileSteps[activeStepIndex].component({
					handleNextStep,
				})}
			</main>
		</div>
	)
}

export default UserUpdateProfile
