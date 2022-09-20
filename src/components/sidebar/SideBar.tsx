import { useQuery } from '@apollo/client'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import MeQuery from '../../graphql/queries/me.query'
import { Routes } from '../../types/routes.type'
import stringUtils from '../../utils/strings.utils'
import Avatar from '../reusable/Avatar'
import Logo from '../reusable/Logo'
import SkeletonSidebar from '../skeleton/SkeletonSidebar'
import SidebarMatches from './SidebarMatches'
import SidebarMessages from './SidebarMessages'
import SideBarNav from './SidebarNav'

const SideBar = () => {
	const {
		data: meData,
		loading: meLoading,
		error: meError,
	} = useQuery(MeQuery)
	const [activeSection, setActiveSection] = React.useState('Matches')
	const location = useLocation()
	if (meLoading || !meData) return <SkeletonSidebar />
	const handleSectionChange = (section: string) => {
		setActiveSection(section)
	}
	return (
		<aside className='position-lg-fixed custom-scrollbar-y vh-md-100 w-lg-md1 w-100 bg-danger-md bg-opacity-10 py-4'>
			<header>
				<div className='center'>
					<Logo />
				</div>
				<Link
					className='bg-danger w-100 mt-4 ps-5 pe-4 pe-md-2    py-3 d-flex align-items-center justify-content-between'
					to={Routes.Update_Profile}>
					<div className='d-flex align-items-center'>
						<Avatar
							size='44px'
							img={meData.me.pfp}
							bg='bg-secondary bg-opacity-85'
						/>
						<h6 className='mb-0 ms-3 text-white pe-1'>
							{stringUtils.joinName(
								meData.me.firstName,
								meData.me.lastName
							)}
						</h6>
					</div>
					<div>
						<button
							className='btn text-white d-md-none'
							data-bs-toggle='offcanvas'
							data-bs-target='#offcanvasNavbar'
							aria-controls='offcanvasNavbar'>
							<i className='fa-solid fa-bars fs-22'></i>
						</button>
					</div>
				</Link>
			</header>
			<main className='position-relative'>
				<nav className='navbar px-0 navbar-light navbar-expand-md'>
					<div className='container-fluid px-md-0'>
						<div
							className='offcanvas px-3 offcanvas-end'
							id='offcanvasNavbar'
							aria-labelledby='offcanvasNavbarLabel'>
							<div className='offcanvas-header pb-2'>
								<button
									type='button'
									className='btn-close text-reset bg-opacity-100  w-15px bg-white h-15px p-3 rounded-circle position-absolute'
									data-bs-dismiss='offcanvas'
									aria-label='Close'
									style={{
										left: '-49px',
										top: '20px',
										opacity: '1',
									}}></button>
							</div>
							<div className='offcanvas-body flex-column pt-0  px-0'>
								<div className='px-4'>
									<SideBarNav
										handleSectionChange={
											handleSectionChange
										}
										activeSection={activeSection}
									/>
									<div className='mt-5'>
										{location.pathname == Routes.Matches ? (
											<SidebarMatches
												matches={meData.me.matches}
											/>
										) : (
											<SidebarMessages />
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</main>
		</aside>
	)
}

export default SideBar
