import { gql } from '@apollo/client'

const SignInMutation = gql`
	mutation SignIn($email: EmailAddress!, $password: String!) {
		signIn(email: $email, password: $password) {
			token
			user {
				id
				firstName
				lastName
				accountType
			}
		}
	}
`

export default SignInMutation
