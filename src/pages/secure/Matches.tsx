import { useSelector } from 'react-redux'
import { userRolesTypes } from '../../types/user-roles.type'
import CompanyMatches from './company/Company-Home'
import UserHome from './user/User-Home'

const Matches = () => {
	const { currentUserRole } = useSelector((state: any) => state.user)

	return currentUserRole == userRolesTypes.CompanyRole ? (
		<CompanyMatches />
	) : (
		<UserHome />
	)
}

export default Matches
