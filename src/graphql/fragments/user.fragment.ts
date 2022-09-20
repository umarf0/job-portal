import { gql } from '@apollo/client'

const UserFragment = gql`
	fragment user on User {
		id
		firstName
		lastName
		role
		currentRole
		accountType
		uploads
		lookingFor
		hereTo
		status
		pfp
		bio
		openToRoles
		github
		twitter
		linkedIn
		website
	}
`

export default UserFragment
