import React from 'react'
import { useState } from 'react'
import { dateUtils } from '../../../utils/date.utils'
import stringUtils from '../../../utils/strings.utils'
import Avatar from '../../reusable/Avatar'
import UserModel from './user-model/userModel'

interface IProps {
	currentUser: any
	matchToJobSeeker: any
	rejectJobSeeker: any
	loadingRejectJobSeeker: boolean
	loadingMatchToJobSeeker: boolean
}

const UserCard = ({
	currentUser,
	matchToJobSeeker,
	rejectJobSeeker,
	loadingRejectJobSeeker,
	loadingMatchToJobSeeker,
}: IProps) => {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const latestEducation = React.useMemo(() => {
		return dateUtils.getLatestDate(currentUser.education, 'graduation')
	}, [currentUser])

	const latestExperience = React.useMemo(() => {
		return dateUtils.getLatestDate(currentUser.jobExperience, 'endDate')
	}, [currentUser])

	return (
		<section className='w-sm-lg w-md2'>
			<div className='card p-5  py-6 text-center shadow-lg border-0 rounded-5'>
				<div className='center mt-4'>
					<div
						onClick={handleShow}
						className='cursor'>
						<Avatar
							size='100px'
							img={currentUser?.pfp}
							logoSize='25px'
							bg='bg-secondary'
						/>
					</div>
				</div>
				<div className='card-body mt-3'>
					<div className='mb-20px'>
						<h3
							className='card-title mb-2 cursor'
							onClick={handleShow}>
							{stringUtils.joinName(
								currentUser?.firstName,
								currentUser?.lastName
							)}
						</h3>
						<small className='text-danger fs-14'>
							{latestExperience?.title}
							{latestExperience && ' , '}
							{latestExperience.company}
							{latestExperience && latestEducation && ' | '}
							{latestEducation && latestEducation.school}
						</small>
					</div>
					<small className='card-text fs-16'>
						{currentUser?.bio}
					</small>
					<div className='d-flex center mt-35px'>
						<button
							className='btn w-48px h-48px btn-success  text-white center rounded-circle me-5 fs-20'
							disabled={loadingMatchToJobSeeker}
							onClick={() => {
								matchToJobSeeker({
									variables: {
										jobSeekerId: currentUser?.id,
									},
								})
							}}>
							<i className='fa-solid fa-check'></i>
						</button>
						<button
							className='btn w-48px h-48px btn-dark-danger  text-white center rounded-circle fs-20'
							disabled={loadingRejectJobSeeker}
							onClick={() => {
								rejectJobSeeker({
									variables: {
										jobSeekerId: currentUser?.id,
									},
								})
							}}>
							<i className='fa-solid fa-xmark'></i>
						</button>
					</div>
				</div>
			</div>
			<div className='card rounded-4 text-center shadow border-0 py-3 mx-2'></div>
			<div className='card rounded-4 text-center shadow border-0 py-3 mx-4'></div>
			<div className='card rounded-4 text-center shadow border-0 py-3 mx-5'></div>
			<UserModel
				handleClose={handleClose}
				show={show}
				currentUser={currentUser}
			/>
		</section>
	)
}

export default UserCard
