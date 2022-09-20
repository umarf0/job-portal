import React from 'react'
import Logo from '../reusable/Logo'

interface Iprops {
	heading: string
}

const SidebarAuth = ({ heading }: Iprops) => {
	return (
		<div className='col-md-6 bg-danger min-vh-100 d-md-flex d-none justify-content-center align-items-center  position-fixed pt-5 flex-column'>
			<Logo
				logoFirstCircleColor='bg-pink-light'
				logoSecondCircleColor='bg-dark-blue'
				titleColor='text-white'
			/>
			<img
				src='/assets/imgs/registerImg.png'
				className='w-60 mt-3'
				alt=''
			/>
			<footer className='mt-3'>
				<p className='text-white'>{heading}</p>
			</footer>
		</div>
	)
}

export default SidebarAuth
