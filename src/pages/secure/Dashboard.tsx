import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import SideBar from '../../components/sidebar/SideBar'
import { userLogout } from '../../store/actions/user.action'
import { Routes } from '../../types/routes.type'
import iCookies from '../../utils/cookies.utils'

const Dashboard = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleLogout = () => {
		iCookies.removeRole()
		iCookies.removeToken()
		dispatch(userLogout())
	}

	useEffect(() => {
		if (location.pathname === '/') {
			navigate(Routes.Matches)
		}
	}, [location])

	return (
		<section className='row'>
			<aside className='col-lg-3 col-md-4 col-12 px-0'>
				<div className='position-relative'>
					<SideBar />
				</div>
			</aside>
			<main className='col-lg-9 col-md-8 col-12'>
				<div className='px-lg-9 px-5 pb-7 pt-md-4 mt-4'>
					<div className='d-flex justify-content-end mb-5'>
						{location.pathname !== Routes.Matches &&
							location.pathname !== Routes.Messages && (
								<Link
									to={Routes.Matches}
									className='btn bg-danger bg-opacity-50 me-4 px-xl-6 px-md-5 py-3 p btn-lg'>
									Matches
								</Link>
							)}
						{location.pathname !== Routes.Update_Profile && (
							<Link
								className='btn bg-danger bg-opacity-50 px-xl-6 px-md-5 py-3 p btn-lg me-4'
								to={Routes.Update_Profile}>
								Profile
							</Link>
						)}
						<button
							className='btn bg-danger bg-opacity-50 px-xl-6 px-md-5 py-3 p btn-lg'
							onClick={handleLogout}>
							Log Out
						</button>
					</div>
					<Outlet />
				</div>
			</main>
		</section>
	)
}

export default Dashboard
