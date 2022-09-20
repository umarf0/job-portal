import React from 'react'

interface Iprops {
	img?: string
	size?: string
	logo?: string
	logoSize?: string
	rounded?: string
	bg?: string
	isOnline?: boolean
}

const Avatar = ({
	img,
	size,
	logo,
	rounded,
	bg,
	logoSize,
	isOnline,
}: Iprops) => {
	return (
		<section
			className={`w-45px h-45px ${rounded || 'rounded-circle'} center ${
				bg || 'bg-secondary'
			} ${isOnline && 'avatar-online'}`}
			style={{
				width: size,
				height: size,
			}}>
			{img ? (
				<img
					src={img}
					alt='avatar'
					className={`w-100 h-100 ${rounded || 'rounded-circle '}`}
				/>
			) : (
				<i
					className={`${logo || 'fa-solid fa-user'} ${
						!logoSize && 'fs-17'
					} text-secondary `}
					style={{
						fontSize: logoSize,
					}}></i>
			)}
		</section>
	)
}

export default Avatar
