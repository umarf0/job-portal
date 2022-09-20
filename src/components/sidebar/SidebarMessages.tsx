import { Link } from 'react-router-dom'
import { Routes } from '../../types/routes.type'
import Avatar from '../reusable/Avatar'

const SidebarMessages = () => {
	return (
		<Link to={Routes.MessagesChat.replace(':id', '1')}>
			<section className='d-flex align-items-center shadow bg-white mb-3 p-3 border-start border-3 border-danger rounded-2'>
				<Avatar img='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
				<div className='ms-4 mt-1'>
					<h6 className='mb-4px fs-16'>Alex Smith</h6>
					<small className='text-secondary'>Hi How are you</small>
				</div>
			</section>
			<section className='d-flex align-items-center shadow bg-white mb-3 p-3 rounded-2'>
				<Avatar img='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
				<div className='ms-4 mt-1'>
					<h6 className='mb-4px fs-16'>Alex Smith</h6>
					<small className='text-secondary'>Hi How are you</small>
				</div>
			</section>
			<section className='d-flex align-items-center shadow bg-white mb-3 p-3 rounded-2'>
				<Avatar img='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
				<div className='ms-4 mt-1'>
					<h6 className='mb-4px fs-16'>Alex Smith</h6>
					<small className='text-secondary'>Hi How are you</small>
				</div>
			</section>
			<section className='d-flex align-items-center shadow bg-white mb-3 p-3 rounded-2'>
				<Avatar img='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
				<div className='ms-4 mt-1'>
					<h6 className='mb-4px fs-16'>Alex Smith</h6>
					<small className='text-secondary'>Hi How are you</small>
				</div>
			</section>
		</Link>
	)
}

export default SidebarMessages
