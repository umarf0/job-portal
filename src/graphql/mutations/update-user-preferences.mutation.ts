import { gql } from '@apollo/client'

const UpdateUserPrefrencesMutation = gql`
	mutation UpdateProfile($status: Status, $hereTo: [JobType]) {
		updateProfile(status: $status, hereTo: $hereTo) {
			status
			hereTo
		}
	}
`

export default UpdateUserPrefrencesMutation
