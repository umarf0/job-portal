interface Iprops {
	heading: string
	description: string
}

const HeaderSignup = ({ heading, description }: Iprops) => {
	return (
		<header className='text-center mb-6'>
			<h3>{heading}</h3>
			<span>{description}</span>
		</header>
	)
}

export default HeaderSignup
