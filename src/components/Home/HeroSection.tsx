import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Routes } from '../../types/routes.type'

const HeroSection = () => {
	const { isAuthenticated } = useSelector((state: any) => state.user)
	return (
		<section className='row h-xl-xl2 h-md-xl gx-0'>
			<div className='col-md-6 d-flex align-items-center h-100'>
				<section className='pe-7 ps-md-7 ps-lg-8 ps-5  pt-md-9 pt-lg-7'>
					<h1
						className='display-4 fw-bold'
						style={{ lineHeight: '1.4' }}>
						Find a <span className='text-danger'>tech job.</span>
						<br /> Have fun.
					</h1>
					<p className='text-secondary fs-18'>
						Finding a tech job shouldn’t be a chore. So we made it fun. <br/>
						Match with startups just like you would on a dating app. Start talking to hiring managers immediately. <br/><br/>

						No more: <br/>
						<ul>
							<li>
								Clunky application processes
							</li>
							<li>
								Cover letters
							</li>
							<li>
								Stock rejection emails
							</li>
						</ul>

						Join talent from companies like Amazon, Google, Microsoft, and more for a better way to find a job.
					</p>
					<footer className='mt-6 d-flex'>
						{!isAuthenticated ? (
							<>
								<Link
									to={Routes.Login}
									className='btn bg-danger w-md-auto w-100 bg-opacity-50 btn-lg px-lg-6'>
									Sign In
								</Link>
								<Link
									to={Routes.SignUp}
									className='btn btn-danger btn-lg w-md-auto w-100 ms-lg-3 ms-5 text-white px-lg-6'>
									Sign Up
								</Link>
							</>
						) : (
							<Link
								to={Routes.Matches}
								className='btn btn-danger px-xl-6 btn-lg px-md-5 py-3 text-white'>
								Matches
							</Link>
						)}
					</footer>
				</section>
			</div>
			<div className='col-md-6 bg-danger-md order-md-last order-first'>
				<div className='center h-100 w-100 center pt-lg-10 pt-md-8 pt-8 pb-4'>
					<img
						src='/assets/imgs/homePageCover.jpg'
						className='w-md-100 w-90'
						alt=''
					/>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
