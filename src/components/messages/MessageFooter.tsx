import { SetStateAction, useEffect, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import data from '@emoji-mart/data'
import EmojiPicker from '../reusable/EmojiPicker'

interface MessageFooterProps {
	isChatSelected: boolean
}

const MessageFooter = ({ isChatSelected }: MessageFooterProps) => {
	const [selectedEmoji, setSelectedEmoji] = useState('')
	const [message, setMessage] = useState('')

	useEffect(() => {
		if (selectedEmoji) {
			setMessage(message + selectedEmoji)
		}
	}, [selectedEmoji])

	return (
		<footer className='w-100 '>
			<div className='d-flex align-items-start bg-danger bg-opacity-10 px-4 py-2'>
				<div className='dropdown'>
					<button
						className='btn px-1'
						disabled={!isChatSelected}
						data-bs-toggle='dropdown'
						aria-expanded='false'
						data-bs-auto-close='outside'>
						<i className='fa-regular fa-face-smile fs-17 text-dark text-opacity-65'></i>
					</button>
					<ul className='dropdown-menu dropdown-menu-start'>
						<EmojiPicker
							data={data}
							theme='light'
							onEmojiSelect={(emoji: {
								native: SetStateAction<string>
							}) => setSelectedEmoji(emoji.native)}
						/>
					</ul>
				</div>

				<TextareaAutosize
					className='form-control bg-transparent border-0 me-4'
					placeholder='Type your message here...'
					disabled={!isChatSelected}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					style={{
						resize: 'none',
					}}
				/>
				<label className='btn px-0'>
					<input
						type='file'
						disabled={!isChatSelected}
						className='d-none'
					/>
					<i className='fa-solid fa-image text-dark text-opacity-65'></i>
				</label>
				<button
					className='btn'
					disabled={!isChatSelected}>
					<i className='fa-solid fa-paper-plane text-dark text-opacity-65'></i>
				</button>
			</div>
		</footer>
	)
}

export default MessageFooter
