import React from 'react'
import MessageActionDropdown from './MessageActionDropdown'
import MessageSearchUser from './MessageSearchUser'
import MessageUserDetails from './MessageUserDetails'

interface MessageHeaderProps {
	isChatSelected: boolean
}

const MessageHeader = ({ isChatSelected }: MessageHeaderProps) => {
	console.log('isChatSelected', isChatSelected)
	return (
		<header className='shadow p-5 rounded-4'>
			{isChatSelected ? (
				<div className='d-flex justify-content-between align-items-center'>
					<MessageUserDetails />
					<MessageActionDropdown />
				</div>
			) : (
				<MessageSearchUser />
			)}
		</header>
	)
}

export default MessageHeader
