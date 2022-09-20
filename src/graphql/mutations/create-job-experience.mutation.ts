import { gql } from '@apollo/client'

const CreateJobExperienceMutation = gql`
	mutation CreateJobExperience(
		$company: String!
		$title: String!
		$startDate: Date!
		$endDate: Date!
	) {
		createJobExperience(
			company: $company
			title: $title
			startDate: $startDate
			endDate: $endDate
		) {
			id
		}
	}
`

export default CreateJobExperienceMutation
