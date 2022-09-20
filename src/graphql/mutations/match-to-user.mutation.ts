import { gql } from '@apollo/client'

const MatchToJobSeekerMutation = gql`
	mutation MatchToJobSeeker($jobSeekerId: ID!) {
		matchToJobSeeker(jobSeekerId: $jobSeekerId) {
			id
			matches {
				id
			}
		}
	}
`

export default MatchToJobSeekerMutation
