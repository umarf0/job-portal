import { gql } from '@apollo/client'

const CreateEducationMutation = gql`
	mutation CreateEducation(
		$school: String!
		$graduation: Date
		$degreeType: DegreeType
	) {
		createEducation(
			school: $school
			graduation: $graduation
			degreeType: $degreeType
		) {
			user {
				id
			}
		}
	}
`

export default CreateEducationMutation
