import { gql } from '@apollo/client'
import CompanyFragment from '../fragments/company.fragment'
const UpdateCompanyMutation = gql`
	mutation UpdateCompany(
		$updateCompanyId: ID!
		$name: String!
		$markets: [Market]
		$elevatorPitch: String!
		$twitter: String
		$github: String
		$linkedIn: String
		$website: String
	) {
		updateCompany(
			id: $updateCompanyId
			name: $name
			markets: $markets
			elevatorPitch: $elevatorPitch
			twitter: $twitter
			github: $github
			linkedIn: $linkedIn
			website: $website
		) {
			id
			name
			logo
			website
			linkedIn
			github
			twitter
			markets
			elevatorPitch
		}
	}
`

export default UpdateCompanyMutation
