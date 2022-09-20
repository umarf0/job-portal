import { gql } from '@apollo/client'

const UpdateEducationMutation = gql`
	mutation UpdateEducation(
		$updateEducationId: ID!
		$school: String
		$graduation: Date
		$degreeType: DegreeType
	) {
		updateEducation(
			id: $updateEducationId
			school: $school
			graduation: $graduation
			degreeType: $degreeType
		) {
			id
		}
	}
`

export default UpdateEducationMutation
