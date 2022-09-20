import React from 'react'
import MessageItemRight from './MessageItemRight'
import MessageItemLeft from './MessageItemLeft'

const MessageList = () => {
	return (
		<ul className='list-group p-4 gap-4'>
			<MessageItemRight />
			<MessageItemLeft />
			<MessageItemRight />
			<MessageItemRight />
			<MessageItemLeft />
			<MessageItemRight />
		</ul>
	)
}

export default MessageList
