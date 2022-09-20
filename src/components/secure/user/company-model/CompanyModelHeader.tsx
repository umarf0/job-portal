import Avatar from '../../../reusable/Avatar'

interface Iprops {
	handleClose: () => void
	currentCompany: any
}

const CompanyModelHeader = ({ handleClose, currentCompany }: Iprops) => {
	return (
		<div>
			<header className='d-flex justify-content-between'>
				<div className='d-flex align-items-center'>
					<Avatar
						img={currentCompany.logo}
						size='78px'
						logo='fa-solid fa-industry fs-30'
					/>
					<div className='ms-4'>
						<h4>{currentCompany.name}</h4>
						<div className='d-flex align-items-center'>
							{currentCompany.website && (
								<a
									href={currentCompany.website}
									target='_blank'
									className='w-27px text-white me-3 rounded-circle center h-27px bg-danger'>
									<i className='fa-solid fa-link fs-13'></i>
								</a>
							)}
							<a
								href={currentCompany.github}
								target='_blank'
								className='w-27px  bg-dark me-3 text-white rounded-circle center h-27px'>
								<i className='fa-brands fs-20 fa-github'></i>
							</a>
							<a
								href={currentCompany.linkedIn}
								target='_blank'
								className='w-27px text-white rounded-circle me-3 center h-27px'
								style={{ backgroundColor: '#0078D4' }}>
								<i className='fa-brands fa-linkedin-in fs-17'></i>
							</a>
							<a
								href={currentCompany.twitter}
								target='_blank'
								className='w-27px text-white rounded-circle center h-27px'
								style={{ backgroundColor: '#03A9F4' }}>
								<i className='fa-brands fa-twitter fs-17'></i>
							</a>
						</div>
					</div>
				</div>
				<button
					className='btn w-37px h-37px rounded-circle bg-light center p-0'
					onClick={handleClose}>
					<i className='fa-solid fa-xmark fs-21 text-secondary'></i>
				</button>
			</header>
			<main>
				<p className='mt-5 mb-1 text-secondary'>
					{currentCompany.elevatorPitch}
				</p>
			</main>
		</div>
	)
}

export default CompanyModelHeader
