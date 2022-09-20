import { gql } from '@apollo/client'

const RejectJobPostingMutation = gql`
	mutation RejectJobPosting($jobPostingId: ID!) {
		rejectJobPosting(jobPostingId: $jobPostingId) {
			id
			recruiter {
				id
				pfp
			}
		}
	}
`

export default RejectJobPostingMutation
