import { useSelector } from 'react-redux'
import { userRolesTypes } from '../../types/user-roles.type'
import CompanyUpdateProfile from './company/Company-Update-Profile'
import UserUpdateProfile from './user/User-Update-Profile'

const UpdateProfile = () => {
	const { currentUserRole } = useSelector((state: any) => state.user)
	return currentUserRole == userRolesTypes.CompanyRole ? (
		<CompanyUpdateProfile />
	) : (
		<UserUpdateProfile />
	)
}

export default UpdateProfile
