import MessageList from './MessageList'

interface MessageListProps {
	isChatSelected: boolean
}

const MessageBody = ({ isChatSelected }: MessageListProps) => {
	return (
		<div
			style={{
				maxHeight: '400px',
				minHeight: '400px',
				overflow: 'auto',
			}}>
			{isChatSelected && <MessageList />}
		</div>
	)
}

export default MessageBody
