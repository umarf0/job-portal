import Step1 from '../../../components/secure/user/updateProfile/updateUserProfile'
import Step2 from '../../../components/secure/user/updateProfile/updateUserEducation'
import Step3 from '../../../components/secure/user/updateProfile/updateUserExperience'
import Step4 from '../../../components/secure/user/updateProfile/updateUserPreferences'
import step1FormJson from './userProfile.json'
import step2FormJson from './userEducation.json'
import userExperianceJson from './userExperiance.json'
import userPreferencesJson from './userPreferences.json'

export interface UpdateProfileStepsType {
	heading: string | JSX.Element
	component: (props?: any) => JSX.Element
}

const updateUserProfileSteps: UpdateProfileStepsType[] = [
	{
		heading: 'Profile',
		component(props: any) {
			return (
				<Step1
					{...props}
					formJson={step1FormJson}
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
					formJson={step2FormJson}
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

export default updateUserProfileSteps
