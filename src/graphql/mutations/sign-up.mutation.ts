import { gql } from '@apollo/client'

const SingUpMutation = gql`
	mutation SignUp(
		$email: EmailAddress!
		$password: String!
		$firstName: String!
		$lastName: String!
		$accountType: AccountType!
	) {
		signUp(
			email: $email
			password: $password
			firstName: $firstName
			lastName: $lastName
			accountType: $accountType
		)
	}
`

export default SingUpMutation
