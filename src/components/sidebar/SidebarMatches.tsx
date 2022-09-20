import { userRolesTypes } from '../../types/user-roles.type'
import iCookies from '../../utils/cookies.utils'
import stringUtils from '../../utils/strings.utils'
import Avatar from '../reusable/Avatar'

interface IProps {
	matches: any[]
}

const SidebarMatches = ({ matches }: IProps) => {
	const role = iCookies.getRole()

	return (
		<div className='row gy-4'>
			{matches.length > 0 ? (
				matches.map((match, index) => {
					if (role == userRolesTypes.CompanyRole) {
						return <UserMatchCard match={match} key={index} />
					} else {
						return <JobMatchCard match={match} key={index} />
					}
				})
			) : (
				<h6 className='center mt-7 fw-medium'>No Matches</h6>
			)}
		</div>
	)
}

const JobMatchCard = ({ match }: any) => {
	return (
		<div className='col-md-6 col-4'>
			<div className='card shadow center p-2 rounded-4 border-0 bg-white h-s w-s h-lg-s1 w-lg-s1'>
				<div>
					<Avatar img={match.pfp} size='55px' />
				</div>
				<small className='mt-16px'>
					{stringUtils.joinName(match.firstName, match.lastName)}
				</small>
			</div>
		</div>
	)
}

const UserMatchCard = ({ match }: any) => {
	return (
		<div className='col-md-6 col-4'>
			<div className='card shadow  rounded-4 border-0 bg-white h-s w-s h-lg-s1 w-lg-s1'>
				<div className='position-relative hover-border-danger rounded'>
					<div className='h-s w-s h-lg-s1 w-lg-s1'>
						<Avatar
							img={match.pfp}
							size='100%'
							rounded='rounded-3'
							logoSize='30px'
						/>
					</div>
					<div
						className='w-100  rounded position-absolute h-75 bottom-0 start-0'
						style={{
							background:
								'linear-gradient(360.38deg, rgba(0, 0, 0,2) -42.94%, rgba(0, 0, 0, 0) 45.2%)',
						}}></div>
				</div>
				<small
					className='position-absolute ps-2 fs-14  fw-bold'
					style={{
						color: '#fff',
						bottom: '8px',
					}}>
					{stringUtils.joinName(match.firstName, match.lastName)}
				</small>
			</div>
		</div>
	)
}

export default SidebarMatches
