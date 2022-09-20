import { gql } from '@apollo/client'

const UpdateJobPostingMutation = gql`
	mutation UpdateJobPosting(
		$updateJobPostingId: ID!
		$title: String
		$about: String
		$roles: [Role]
		$jobType: JobType
	) {
		updateJobPosting(
			id: $updateJobPostingId
			title: $title
			about: $about
			roles: $roles
			jobType: $jobType
		) {
			id
			title
			about
			roles
			jobType
		}
	}
`

export default UpdateJobPostingMutation
