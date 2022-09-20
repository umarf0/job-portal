import React from 'react'

const MessageActionDropdown = () => {
	return (
		<div>
			<div className='dropdown'>
				<button
					className='btn'
					type='button'
					data-bs-toggle='dropdown'
					aria-expanded='false'>
					<i className='fa-solid fa-ellipsis-vertical fs-20'></i>
				</button>
				<ul className='dropdown-menu dropdown-menu-end'>
					<li>
						<a
							className='dropdown-item'
							href='#'>
							Action
						</a>
					</li>
					<li>
						<a
							className='dropdown-item'
							href='#'>
							Another 2
						</a>
					</li>

					<li>
						<a
							className='dropdown-item'
							href='#'>
							Another 3
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default MessageActionDropdown
