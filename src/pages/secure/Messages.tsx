import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MessageBody from '../../components/messages/MessageBody'
import MessageFooter from '../../components/messages/MessageFooter'
import MessageHeader from '../../components/messages/MessageHeader'

const Messages = () => {
	const params = useParams<{ id: string }>()
	const [isChatSelected, setIsChatSelected] = useState(false)

	useEffect(() => setIsChatSelected(!!params.id), [params.id])

	return (
		<section>
			<MessageHeader isChatSelected={isChatSelected} />
			<main className='shadow mt-5 rounded-4'>
				<MessageBody isChatSelected={isChatSelected} />
				<MessageFooter isChatSelected={isChatSelected} />
			</main>
		</section>
	)
}

export default Messages
