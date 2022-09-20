import { gql } from '@apollo/client'

const CreateCompanyMutation = gql`
	mutation CreateCompany(
		$name: String!
		$markets: [Market]!
		$elevatorPitch: String!
		$website: String
		$linkedIn: String
		$github: String
		$twitter: String
	) {
		createCompany(
			name: $name
			markets: $markets
			elevatorPitch: $elevatorPitch
			website: $website
			linkedIn: $linkedIn
			github: $github
			twitter: $twitter
		) {
			id
		}
	}
`

export default CreateCompanyMutation
