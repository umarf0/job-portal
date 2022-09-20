const MessageSearchUser = () => {
	return (
		<div className='d-flex align-items-center'>
			<label
				htmlFor='searchUserForChat'
				className='me-3'>
				To:
			</label>
			<input
				type='text'
				className='form-control w-md'
				id='searchUserForChat'
				placeholder='Recipients'
			/>
		</div>
	)
}

export default MessageSearchUser
