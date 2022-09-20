import React from 'react'
import Avatar from '../reusable/Avatar'

const MessageUserDetails = () => {
	return (
		<div className='d-flex gap-4'>
			<div className=' position-relative '>
				<Avatar
					isOnline
					img='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
				/>
			</div>
			<div className='mt-1'>
				<h6 className='mb-1 fs-16'>Alex Smith</h6>
				<span className='fs-13 text-dark text-opacity-50 '>
					Active Now
				</span>
			</div>
		</div>
	)
}

export default MessageUserDetails
