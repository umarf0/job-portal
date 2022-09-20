import { gql } from '@apollo/client'
import JobPostingFragment from '../fragments/job-posting.fragment'
import UserFragment from '../fragments/user.fragment'
import CompanyFragment from '../fragments/company.fragment'

const JobPostingsQuery = gql`
	${UserFragment}
	${CompanyFragment}
	${JobPostingFragment}
	query JobPostings {
		jobPostings {
			...jobPosting
			company {
				...company
				markets
				jobsPostings {
					id
					title
					jobType
					roles
				}
			}
		}
	}
`

export default JobPostingsQuery
