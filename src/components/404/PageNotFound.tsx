import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Routes } from '../../types/routes.type'

const PageNotFound = () => {
	const navigate = useNavigate()
	return (
		<section className='center vh-90'>
			<div className='text-center'>
				<h1 className='display-5'>404 Page Not Found</h1>
				<button
					className='btn btn-danger text-white btn-lg mt-4'
					onClick={() => navigate(Routes.Home)}>
					Return to Home
				</button>
			</div>
		</section>
	)
}

export default PageNotFound
