import { Modal } from 'react-bootstrap'
import UserDetails from './userDetails'
import UserEducation from './userEducation'
import UserExperience from './userExperiance'
import UserModelHeader from './UserModelHeader'

interface Iprops {
	show: boolean
	handleClose: () => void
	currentUser: any
}

const UserModel = ({ show, handleClose, currentUser }: Iprops) => {
	return (
		<Modal
			show={show}
			onHide={handleClose}
			dialogClassName='max-vw-lg-70 max-vw-md-80 max-vw-sm-90'>
			<Modal.Header className='border-0 px-5 pt-5'>
				<section className='w-100'>
					<UserModelHeader
						handleClose={handleClose}
						currentUser={currentUser}
					/>
				</section>
			</Modal.Header>
			<Modal.Body className='px-5 pb-5 '>
				<section className='border-top pt-5'>
					<UserDetails currentUser={currentUser} />
					{currentUser.education &&
						currentUser.education.length > 0 && (
							<UserEducation currentUser={currentUser} />
						)}
					{currentUser.jobExperience &&
						currentUser.jobExperience.length > 0 && (
							<UserExperience currentUser={currentUser} />
						)}
				</section>
			</Modal.Body>
		</Modal>
	)
}

export default UserModel
