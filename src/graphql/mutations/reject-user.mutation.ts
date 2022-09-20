import { gql } from '@apollo/client'

const RejectJobSeekerMutation = gql`
	mutation RejectJobSeeker($jobSeekerId: ID!) {
		rejectJobSeeker(jobSeekerId: $jobSeekerId) {
			id
		}
	}
`

export default RejectJobSeekerMutation
