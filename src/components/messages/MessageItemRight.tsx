const MessageItemRight = () => {
	return (
		<li
			className='list-group-item border-0 rounded bg-danger bg-opacity-10 align-self-end'
			style={{ width: 'max-content' }}>
			<header>
				<span className='pe-7 ps-1'>You up for the meeting?</span>
				<div className='fs-10 d-flex justify-content-end gap-2  align-items-center mt-1 '>
					<span>11:31 AM</span>
					<i className='fa-solid fa-check-double'></i>
				</div>
			</header>
		</li>
	)
}

export default MessageItemRight
