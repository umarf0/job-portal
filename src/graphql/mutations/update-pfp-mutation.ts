import { gql } from '@apollo/client'

const UpdatePFPMutation = gql`
	mutation UpdatePFP($pfp: Upload!) {
		updatePFP(pfp: $pfp) {
			pfp
		}
	}
`

export default UpdatePFPMutation
