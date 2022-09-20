import { gql } from '@apollo/client'
import CompanyFragment from '../fragments/company.fragment'

const CompaniesQuery = gql`
	${CompanyFragment}
	query Companies {
		companies {
			...company
		}
	}
`

export default CompaniesQuery
