import { gql } from '@apollo/client'

const UpdateJobExperienceMutation = gql`
	mutation UpdateJobExperience(
		$updateJobExperienceId: ID!
		$company: String
		$title: String
		$startDate: Date
		$endDate: Date
	) {
		updateJobExperience(
			id: $updateJobExperienceId
			company: $company
			title: $title
			startDate: $startDate
			endDate: $endDate
		) {
			id
		}
	}
`

export default UpdateJobExperienceMutation
