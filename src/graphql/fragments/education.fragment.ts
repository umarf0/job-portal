import { gql } from '@apollo/client'
import UserFragment from './user.fragment'

const EducationFragment = gql`
	${UserFragment}
	fragment education on Education {
		id
		school
		graduation
		degreeType
		user {
			...user
		}
	}
`

export default EducationFragment
