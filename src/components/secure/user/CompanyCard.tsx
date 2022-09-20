import { useEffect, useState } from 'react'
import Avatar from '../../reusable/Avatar'

interface CompanyCardProps {
	currentJobPost: any
	handleNextJobPost: () => void
	handleApplyToJobPosting: (jobPostingId: string) => void
	handleRejectJobPosting: (jobPostingId: string) => void
	handleCompanyModelShow: () => void
	loadingRejectJobPosting: boolean
	loadingApplyToJobPosting: boolean
}

const CompanyCard = ({
	currentJobPost,
	handleNextJobPost,
	handleApplyToJobPosting,
	handleRejectJobPosting,
	handleCompanyModelShow,
	loadingApplyToJobPosting,
	loadingRejectJobPosting,
}: CompanyCardProps) => {
	const [currentCompany, setCurrentCompany] = useState(null)

	useEffect(() => {
		if (currentJobPost) {
			setCurrentCompany(currentJobPost?.company)
		}
	}, [currentJobPost])

	console.log('currentJobPost', currentJobPost)

	return (
		<section className='w-sm-lg w-md2'>
			<div className='card p-5  py-6 text-center shadow-lg border-0 rounded-5'>
				<div className='center mt-4'>
					<div onClick={handleCompanyModelShow} className='cursor'>
						<Avatar
							size='100px'
							img={currentJobPost?.recruiter?.pfp}
							logo='fa-solid fa-industry fs-30'
							bg='bg-secondary'
						/>
					</div>
				</div>
				<div className='card-body mt-3'>
					<div className='mb-20px'>
						<h3
							className='card-title mb-4 cursor'
							onClick={handleCompanyModelShow}>
							{currentJobPost?.company.name}
						</h3>
						<small className='text-danger fs-14'>
							{currentJobPost?.company.markets[0]}
							{' | '}
							{currentJobPost?.title}
						</small>
					</div>
					<small className='card-text fs-16'>
						{currentJobPost?.about}
					</small>
					<div className='d-flex center mt-35px'>
						<button
							className='w-48px h-48px btn btn-success text-white center rounded-circle me-5 fs-20'
							disabled={loadingApplyToJobPosting}
							onClick={() => {
								handleApplyToJobPosting(currentJobPost?.id)
							}}>
							<i className='fa-solid fa-check'></i>
						</button>
						<button
							className='btn w-48px h-48px btn-dark-danger text-white center rounded-circle fs-20'
							disabled={loadingRejectJobPosting}
							onClick={() => {
								handleRejectJobPosting(currentJobPost?.id)
							}}>
							<i className='fa-solid fa-xmark'></i>
						</button>
					</div>
				</div>
			</div>
			<div className='card rounded-4 text-center shadow border-0 py-3 mx-2'></div>
			<div className='card rounded-4 text-center shadow border-0 py-3 mx-4'></div>
			<div className='card rounded-4 text-center shadow border-0 py-3 mx-5'></div>
		</section>
	)
}

export default CompanyCard
