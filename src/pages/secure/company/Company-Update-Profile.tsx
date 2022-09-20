import { Link } from 'react-router-dom'
import PreviousNavigationBtn from '../../../components/reusable/BtnPrevNavigation'
import UpdateCompanyProfile from '../../../components/secure/company/UpdateCompanyProfile'
import { Routes } from '../../../types/routes.type'

const CompanyUpdateProfile = () => {
	return (
		<div>
			<header className='d-flex justify-content-between align-items-center mb-6'>
				<PreviousNavigationBtn marginBottom='mb-0' />
				<div>
					<Link
						className='btn bg-danger  py-3 fw-bold bg-opacity-50 me-4'
						to={Routes.CompanyViewJobs}>
						View Job Posts
					</Link>
					<Link
						className='btn btn-danger py-3 fw-bold text-white'
						to={Routes.CreateJob}>
						Add Job Post
					</Link>
				</div>
			</header>
			<UpdateCompanyProfile />
		</div>
	)
}

export default CompanyUpdateProfile
