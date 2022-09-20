interface IProps {
	currentUser: any
}

const UserEducation = ({ currentUser }: IProps) => {
	return (
		<section className='mt-6'>
			<header>
				<h4>Education</h4>
			</header>
			<main>
				<ul className='list-group mt-5 px-0'>
					{currentUser.education.map(
						(education: any, index: number) => {
							return <EducationList education={education} />
						}
					)}
				</ul>
			</main>
		</section>
	)
}

interface IPropsEducation {
	education: any
}

const EducationList = ({ education }: IPropsEducation) => {
	return (
		<li className='list-group-item bg-light mb-4 border-0 p-4 d-flex flex-md-row flex-column justify-content-between rounded-3'>
			<div className='d-flex'>
				<div className='w-50px h-50px bg-danger rounded-circle center p-1 me-4'>
					<img
						src='/assets/icons/education.svg'
						className='w-100'
						alt=''
					/>
				</div>
				<div>
					<p className='mb-1 text-black'>{education.school}</p>
					<span className='text-secondary'>
						{education.degreeType}
					</span>
				</div>
			</div>
			<div>
				<p className='mb-1 mt-md-0 mt-5'>Graduation Date</p>
				<span className='text-danger'>{education.graduation}</span>
			</div>
		</li>
	)
}

export default UserEducation
