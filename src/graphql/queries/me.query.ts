import { gql } from '@apollo/client'
import UserFragment from '../fragments/user.fragment'
import JobPostingFragment from '../fragments/job-posting.fragment'
import JobExperienceFragment from '../fragments/job-experience.fragment'
import EducationFragment from '../fragments/education.fragment'
import CompanyFragment from '../fragments/company.fragment'

const MeQuery = gql`
	${UserFragment}
	${JobPostingFragment}
	${JobExperienceFragment}
	${EducationFragment}
	${CompanyFragment}
	query Me {
		me {
			...user
			matchedTo {
				...user
			}
			matchedFrom {
				...user
			}
			matches {
				...user
			}
			rejectedJobSeekers {
				...user
			}
			appliedTo {
				...jobPosting
			}
			jobPostings {
				...jobPosting
			}
			rejectedJobs {
				...jobPosting
				recruiter {
					...user
				}
			}
			education {
				...education
			}
			jobExperience {
				...jobExperience
			}
			company {
				...company
			}
		}
	}
`

export default MeQuery
