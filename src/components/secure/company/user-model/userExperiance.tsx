interface Iprops {
	currentUser: any
}

const UserExperience = ({ currentUser }: Iprops) => {
	return (
		<section className='mt-6'>
			<header>
				<h4>Experience</h4>
			</header>
			<main>
				<ul className='list-group mt-5 px-0'>
					{currentUser.jobExperience.map(
						(jobExperience: any, index: number) => {
							return (
								<ExperienceList jobExperience={jobExperience} />
							)
						}
					)}
				</ul>
			</main>
		</section>
	)
}

interface IpropsExperience {
	jobExperience: any
}

const ExperienceList = ({ jobExperience }: IpropsExperience) => {
	return (
		<li className='list-group-item bg-light mb-4 d-flex flex-md-row flex-column border-0 p-4 d-flex justify-content-between rounded-3'>
			<div className='d-flex'>
				<div className='w-50px h-50px bg-danger rounded-circle center p-1 me-4'>
					<img
						src='/assets/icons/education.svg'
						className='w-100'
						alt=''
					/>
				</div>
				<div>
					<p className='mb-1 text-black'>{jobExperience.title}</p>
					<span className='text-secondary'>
						{jobExperience.company}
					</span>
				</div>
			</div>
			<div>
				<div className='d-flex justify-content-between'>
					<div className='me-md-5'>
						<p className='mb-1 mt-md-0 mt-5'>Start Date</p>
						<span className='text-danger'>
							{jobExperience.startDate}
						</span>
					</div>
					<div>
						<p className='mb-1 mt-md-0 mt-5'>End Date</p>
						<span className='text-danger'>
							{jobExperience.endDate}
						</span>
					</div>
				</div>
			</div>
		</li>
	)
}

export default UserExperience
