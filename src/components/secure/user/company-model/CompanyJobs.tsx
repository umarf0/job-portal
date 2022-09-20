interface Iprops {
	currentCompany: any
}

const CompanyOpenings = ({ currentCompany }: Iprops) => {
	return (
		<section className='mt-6'>
			<header>
				<h4>Current Openings</h4>
			</header>
			<main>
				<ul className='list-group mt-5'>
					{currentCompany.jobsPostings.length > 0 &&
						currentCompany.jobsPostings.map(
							(jobPost: any, index: number) => {
								return (
									<JobOpening jobPost={jobPost} key={index} />
								)
							}
						)}
				</ul>
			</main>
		</section>
	)
}

interface IjobPost {
	jobPost: any
}

const JobOpening = ({ jobPost }: IjobPost) => {
	return (
		<li className='list-group-item bg-light mb-4 border-0 p-4 d-flex flex-md-row flex-column align-items-md-center justify-content-between rounded-2'>
			<div className='d-flex justify-content-between align-items-start'>
				<div className='d-flex align-items-center'>
					<div className='w-50px h-50px bg-danger rounded-circle center p-2 me-4'>
						<img
							src='/assets/icons/experience.svg'
							className='w-100'
							alt=''
						/>
					</div>
					<div>
						<p className='mb-1 text-black'>
							{jobPost.title || 'Null'}{' '}
						</p>
					</div>
				</div>
				<div className='d-block d-md-none'>
					<p className='mb-1'>Job Type</p>
					<span className='text-danger'>{jobPost.jobType}</span>
				</div>
			</div>
			<div className='mt-md-0 mt-5'>
				{jobPost.roles.map((role: any, index: number) => {
					return (
						<div
							className='btn mb-md-0 mb-3 me-3 w-auto bg-danger rounded-pill bg-opacity-50 text-danger'
							style={{
								cursor: 'default',
							}}>
							{role}
						</div>
					)
				})}
			</div>
			<div className='d-none d-md-block'>
				<p className='mb-1 mt-md-0 mt-5'>Job Type</p>
				<span className='text-danger'>{jobPost.jobType}</span>
			</div>
		</li>
	)
}

export default CompanyOpenings
