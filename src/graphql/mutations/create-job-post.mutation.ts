import { gql } from '@apollo/client'

const CreateJobPostingMutation = gql`
	mutation CreateJobPosting(
		$title: String!
		$about: String!
		$roles: [Role!]!
		$jobType: JobType!
	) {
		createJobPosting(
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

export default CreateJobPostingMutation
