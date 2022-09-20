import { gql } from '@apollo/client'

const ApplyToJobPostingMutation = gql`
	mutation ApplyToJobPosting($jobPostingId: ID!) {
		applyToJobPosting(jobPostingId: $jobPostingId) {
			id
			recruiter {
				id
			}
		}
	}
`

export default ApplyToJobPostingMutation
