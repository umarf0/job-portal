interface Iprops {
	size?: 'sm' | 'md'
	color?: string
}

const Spinner = ({ size, color }: Iprops) => {
	return (
		<div
			className={`spinner-border spinner-border-${size} text-${color} `}
			role='status'>
			<span className='visually-hidden'>Loading...</span>
		</div>
	)
}

export default Spinner
