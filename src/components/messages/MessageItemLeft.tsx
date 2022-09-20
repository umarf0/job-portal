import Avatar from '../reusable/Avatar'

const MessageItemLeft = () => {
	return (
		<li
			className='border-0 d-flex gap-3'
			style={{ width: 'max-content' }}>
			<Avatar />
			<header className='rounded bg-danger text-white list-group-item'>
				<span className='pe-7 ps-1'>Hi, Yeah sure, When?</span>
				<div className='fs-10 d-flex justify-content-end gap-2  align-items-center mt-1 '>
					<span>11:31 AM</span>
					<i className='fa-solid fa-check-double'></i>
				</div>
			</header>
		</li>
	)
}

export default MessageItemLeft
