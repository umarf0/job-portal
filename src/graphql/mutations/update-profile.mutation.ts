import { gql } from '@apollo/client'
import UserFragment from '../fragments/user.fragment'
import CompanyFragment from '../fragments/company.fragment'

const UpdateProfileMutation = gql`
	${UserFragment}
	${CompanyFragment}
	mutation UpdateProfile(
		$accountType: [AccountType]
		$currentRole: Role
		$openToRoles: [Role]
		$website: String
		$bio: String
		$lookingFor: String
		$hereTo: [JobType]
		$twitter: String
		$status: Status
		$github: String
		$linkedIn: String
	) {
		updateProfile(
			accountType: $accountType
			currentRole: $currentRole
			openToRoles: $openToRoles
			website: $website
			bio: $bio
			lookingFor: $lookingFor
			hereTo: $hereTo
			twitter: $twitter
			status: $status
			github: $github
			linkedIn: $linkedIn
		) {
			...user
			company {
				...company
			}
		}
	}
`

export default UpdateProfileMutation
