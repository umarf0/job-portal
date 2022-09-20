import { gql } from '@apollo/client'
import UserFragment from './user.fragment'

const JobPostingFragment = gql`
	${UserFragment}
	fragment jobPosting on JobPosting {
		id
		title
		about
		roles
		jobType
		applied {
			...user
		}
		recruiter {
			id
			pfp
		}
	}
`

export default JobPostingFragment
