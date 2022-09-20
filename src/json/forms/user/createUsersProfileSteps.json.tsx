import Step1 from '../../../components/signup/userSteps/AddUserProfile'
import Step2 from '../../../components/signup/userSteps/AddUserEducation'
import Step3 from '../../../components/signup/userSteps/AddUserExperience'
import Step4 from '../../../components/signup/userSteps/AddUserPreference'
import userProfileJson from './userProfile.json'
import userEducationJson from './userEducation.json'
import userExperianceJson from './userExperiance.json'
import userPreferencesJson from './userPreferences.json'

export interface SignupStepsType {
	heading: string | JSX.Element
	component: (props?: any) => JSX.Element
}

const createUserProfileSteps: SignupStepsType[] = [
	{
		heading: 'Profile',
		component(props: any) {
			return (
				<Step1
					{...props}
					formJson={userProfileJson}
				/>
			)
		},
	},
	{
		heading: 'Education',
		component(props: any) {
			return (
				<Step2
					{...props}
					formJson={userEducationJson}
				/>
			)
		},
	},
	{
		heading: 'Experience',
		component(props: any) {
			return (
				<Step3
					{...props}
					formJson={userExperianceJson}
				/>
			)
		},
	},
	{
		heading: 'Preferences',
		component(props: any) {
			return (
				<Step4
					{...props}
					formJson={userPreferencesJson}
				/>
			)
		},
	},
]

export default createUserProfileSteps
