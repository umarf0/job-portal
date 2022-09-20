import React from 'react'
import { dateUtils } from '../../../../utils/date.utils'
import stringUtils from '../../../../utils/strings.utils'
import Avatar from '../../../reusable/Avatar'

interface Iprops {
	handleClose: () => void
	currentUser: any
}

const UserHeader = ({ handleClose, currentUser }: Iprops) => {
	const latestExperience = React.useMemo(() => {
		return dateUtils.getLatestDate(currentUser.jobExperience, 'endDate')
	}, [currentUser])

	return (
		<div>
			<header className='d-flex justify-content-between'>
				<div className='d-flex align-items-center'>
					<Avatar
						img={currentUser.pfp}
						size='78px'
						bg='bg-secondary'
						logoSize='20px'
					/>
					<div className='ms-4'>
						<h4>
							{stringUtils.joinName(
								currentUser.firstName,
								currentUser.lastName
							)}
						</h4>
						<div className='d-flex align-items-center'>
							{currentUser.website && (
								<a
									href={currentUser.website}
									target='_blank'
									className='w-27px text-white me-3 rounded-circle center h-27px bg-danger'>
									<i className='fa-solid fa-link fs-13'></i>
								</a>
							)}
							<a
								href={currentUser.github}
								target='_blank'
								className='w-27px  bg-dark me-3 text-white rounded-circle center h-27px'>
								<i className='fa-brands fs-20 fa-github'></i>
							</a>
							<a
								href={currentUser.linkedin}
								target='_blank'
								className='w-27px text-white rounded-circle me-3 center h-27px'
								style={{ backgroundColor: '#0078D4' }}>
								<i className='fa-brands fa-linkedin-in fs-17'></i>
							</a>
							<a
								href={currentUser.twitter}
								target='_blank'
								className='w-27px text-white rounded-circle center h-27px'
								style={{ backgroundColor: '#03A9F4' }}>
								<i className='fa-brands fa-twitter fs-17'></i>
							</a>
						</div>
					</div>
				</div>
				<button
					className='btn w-37px h-37px rounded-circle bg-light center p-0'
					onClick={handleClose}>
					<i className='fa-solid fa-xmark fs-21 text-secondary'></i>
				</button>
			</header>
			<main>
				<h6 className='text-danger fw-normal mt-5'>
					{latestExperience?.title}
					{latestExperience && ' , '}
					{latestExperience.company}
				</h6>
				<p className='mb-0 text-secondary'>{currentUser.bio}</p>
			</main>
		</div>
	)
}

export default UserHeader
