import { gql } from '@apollo/client'
import UserFragment from '../fragments/user.fragment'
import EducationFragment from '../fragments/education.fragment'
import JobExperienceFragment from '../fragments/job-experience.fragment'

const UsersQuery = gql`
	${UserFragment}
	${EducationFragment}
	${JobExperienceFragment}
	query Users(
		$currentRoles: [Role]
		$openToRoles: [Role]
		$jobTypes: [JobType]
	) {
		users(
			currentRoles: $currentRoles
			openToRoles: $openToRoles
			jobTypes: $jobTypes
		) {
			...user
			education {
				...education
			}
			jobExperience {
				...jobExperience
			}
		}
	}
`

export default UsersQuery
