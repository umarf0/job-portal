import { gql } from '@apollo/client'
import UserFragment from './user.fragment'
import JobPostingFragment from './job-posting.fragment'

const CompanyFragment = gql`
	${UserFragment}
	${JobPostingFragment}
	fragment company on Company {
		id
		name
		logo
		website
		linkedIn
		github
		twitter
		markets
		elevatorPitch
		jobsPostings {
			...jobPosting
		}
		recruiters {
			...user
		}
	}
`

export default CompanyFragment
