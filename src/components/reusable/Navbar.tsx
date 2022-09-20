import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { Routes } from '../../types/routes.type'
import { userLogout } from '../../store/actions/user.action'
import headerNavJson, { IHeaderNavType } from '../../json/headerNav.json'
import Logo from './Logo'
import iCookies from '../../utils/cookies.utils'

const Navbar = () => {
	const [active, setActive] = React.useState(false)
	const { isAuthenticated } = useSelector((state: any) => state.user)
	const dispatch = useDispatch()

	const handleLogout = () => {
		iCookies.removeRole()
		iCookies.removeToken()
		dispatch(userLogout())
	}

	return (
		<header className={`${active && 'bg-md-white'}`}>
			<nav className='navbar container  pb-lg-4 pt-lg-4 pt-3 pb-6 navbar-expand-lg navbar-light'>
				<div className='container-fluid ps-0'>
					<Logo />
					<button
						className='navbar-toggler text-danger'
						type='button'
						data-bs-toggle='collapse'
						onClick={() => setActive(!active)}
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<img
							src={
								!active
									? '/assets/icons/navbartoggler.svg'
									: '/assets/icons/multiply.svg'
							}
							className='w-25px text-danger'
							alt=''
						/>
					</button>
					<section
						className={`collapse ${
							active && 'd-flex'
						} justify-content-lg-end  justify-content-center align-items-center flex-lg-row flex-column  navbar-collapse pb-5 pb-lg-0`}
						style={{
							transition: 'all .1s ease',
						}}
						id='navbarSupportedContent'>
						<ul className='navbar-nav mb-3 mt-lg-0 mt-4 mb-lg-0 text-center'>
							{headerNavJson.map(
								(navigation: IHeaderNavType, index: number) => {
									return (
										<li
											className='nav-item'
											key={index}>
											<NavLink
												className={({ isActive }) => {
													let classNames =
														'nav-link me-3'
													return isActive
														? (classNames +=
																' active')
														: classNames +
																' text-dark'
												}}
												aria-current='page'
												to={navigation.url}>
												{navigation.title}
											</NavLink>
										</li>
									)
								}
							)}
						</ul>
						<section className='ms-xl-8 ms-lg-5 mt-lg-0 mt-5'>
							{!isAuthenticated ? (
								<>
									<Link
										to={Routes.Login}
										className='btn bg-danger bg-opacity-50 px-xl-6 px-md-5 py-3 p btn-lg'>
										Sign In
									</Link>
									<Link
										to={Routes.SignUp}
										className='btn btn-danger px-xl-6 btn-lg px-md-5 ms-3 py-3 text-white'>
										Sign Up
									</Link>
								</>
							) : (
								<>
									<Link
										to={Routes.Matches}
										className='btn bg-danger me-4 px-xl-6 px-md-5 py-3 p btn-lg text-white'>
										Matches
									</Link>

									<button
										className='btn bg-danger bg-opacity-50 px-xl-6 px-md-5 py-3 p btn-lg'
										onClick={handleLogout}>
										Log Out
									</button>
								</>
							)}
						</section>
					</section>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
