import { gql } from '@apollo/client'
import UserFragment from './user.fragment'

const JobExperienceFragment = gql`
	${UserFragment}
	fragment jobExperience on JobExperience {
		id
		company
		title
		startDate
		endDate
	}
`

export default JobExperienceFragment
