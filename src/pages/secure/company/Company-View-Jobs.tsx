import { useLazyQuery } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'
import PreviousNavigationBtn from '../../../components/reusable/BtnPrevNavigation'
import SkeletonJobPost from '../../../components/skeleton/SkeletonJobPost'
import MeQuery from '../../../graphql/queries/me.query'
import { Routes } from '../../../types/routes.type'

const ViewCompanyJobs = () => {
	const [getMe, { loading: loadingMe, data: dataMe }] = useLazyQuery(MeQuery)

	React.useEffect(() => {
		getMe()
	}, [getMe])

	return (
		<section className=''>
			<header className='mb-5'>
				<PreviousNavigationBtn />
				<h5>View Jobs Posts</h5>
			</header>
			<main>
				{loadingMe ? (
					Array.from({ length: 3 }).map((_, i) => (
						<SkeletonJobPost key={i} />
					))
				) : dataMe?.me?.company?.jobsPostings?.length > 0 ? (
					<ul className='list-group list-group-flush'>
						{dataMe?.me?.company?.jobsPostings.map(
							(jobPosting: any, i: number) => (
								<CompanyJob jobPosting={jobPosting} />
							)
						)}
					</ul>
				) : (
					<div className='center mt-7'>
						<h3>No Jobs Postings</h3>
					</div>
				)}
			</main>
		</section>
	)
}

const CompanyJob = ({ jobPosting }: any) => {
	return (
		<li className='list-group-item border-0 bg-secondary mb-4 p-4 rounded-3 d-flex justify-content-between align-items-center'>
			<div className='d-flex align-items-center'>
				<div className='w-50px h-50px text-white bg-danger rounded-circle center cursor me-4'>
					<i className='fa-solid fa-briefcase fs-19'></i>
				</div>
				<div>
					<h6 className='mb-1 fs-16'>{jobPosting.title}</h6>
					{/* <small>Communication Manager</small> */}
				</div>
			</div>
			{jobPosting.roles.map((role: any) => (
				<button className='btn bg-danger rounded-6 py-5px fs-13 text-danger bg-opacity-25'>
					{role}
				</button>
			))}
			<span className='text-danger'>{jobPosting.jobType}</span>
			<div className='d-flex'>
				<Link
					to={Routes.UpdateJob.replace(':id', jobPosting.id)}
					className='w-35px h-35px text-white bg-primary rounded-circle center cursor me-2'>
					<i className='fa-solid fa-pen'></i>
				</Link>
				<div className='w-35px h-35px text-white bg-danger rounded-circle center cursor'>
					<i className='fa-solid fa-trash-can'></i>
				</div>
			</div>
		</li>
	)
}

export default ViewCompanyJobs
