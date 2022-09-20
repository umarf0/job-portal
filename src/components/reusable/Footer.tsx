import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='bg-dark-blue py-7 py-lg-8  px-5'>
			<div className='container'>
				<div className='row gx-sm-0 gy-6'>
					<div className='col-lg-5 col-md-6 text-white text-opacity-80'>
						<div className='pe-md-9'>
							<h3 className='text-white'>Molerat</h3>
							<p>

							</p>
						</div>
						<div className='d-flex align-items-center mt-6'>
							<a
								target='_blank'
								href='https://www.facebook.com/'
								className='bg-danger me-4 w-38px h-38px rounded-circle center'>
								<i className='fa-brands fa-facebook-f text-white fs-17'></i>
							</a>
							<a
								target='_blank'
								href='https://www.twitter.com/'
								className='bg-danger me-4 w-38px h-38px rounded-circle center'>
								<i className='fa-brands fa-twitter text-white fs-17'></i>
							</a>
							<a
								target='_blank'
								href='https://www.youtube.com/'
								className='bg-danger me-4 w-38px h-38px rounded-circle center'>
								<i className='fa-brands fa-youtube text-white fs-17'></i>
							</a>
							<a
								target='_blank'
								href='https://dribbble.com/'
								className='bg-danger w-38px h-38px rounded-circle center'>
								<i className='fa-brands fa-dribbble text-white fs-17'></i>
							</a>
						</div>
						<p className='mt-6'>
							<span>Copyright @2022 Molerat</span>
						</p>
					</div>
					<div className='col-lg-4 col-md-6'>
						<div className='row'>
							{/*<div className='col-6  d-flex flex-column'>*/}
							{/*	<Link*/}
							{/*		to='/'*/}
							{/*		className='text-white text-opacity-80 mb-4'>*/}
							{/*		Safety Tips*/}
							{/*	</Link>*/}
							{/*	<Link*/}
							{/*		to='/'*/}
							{/*		className='text-white text-opacity-80 mb-4'>*/}
							{/*		Careers*/}
							{/*	</Link>*/}
							{/*	<Link*/}
							{/*		to='/'*/}
							{/*		className='text-white text-opacity-80 mb-4'>*/}
							{/*		Terms&Conditions*/}
							{/*	</Link>*/}
							{/*	<Link*/}
							{/*		to='/'*/}
							{/*		className='text-white text-opacity-80 mb-4'>*/}
							{/*		Privacy Policy*/}
							{/*	</Link>*/}
							{/*	<Link*/}
							{/*		to='/'*/}
							{/*		className='text-white text-opacity-80 mb-4'>*/}
							{/*		Affiliates*/}
							{/*	</Link>*/}
							{/*	<Link*/}
							{/*		to='/'*/}
							{/*		className='text-white text-opacity-80 mb-4'>*/}
							{/*		Help*/}
							{/*	</Link>*/}
							{/*</div>*/}
							{/*<div className='col-6  d-flex flex-column'>*/}
							{/*	<Link*/}
							{/*		to='/'*/}
							{/*		className='text-white text-opacity-80 mb-4'>*/}
							{/*		Press*/}
							{/*	</Link>*/}
							{/*	<Link*/}
							{/*		to='/'*/}
							{/*		className='text-white text-opacity-80 mb-4'>*/}
							{/*		Hiring Site*/}
							{/*	</Link>*/}
							{/*	<Link*/}
							{/*		to='/'*/}
							{/*		className='text-white text-opacity-80 mb-4'>*/}
							{/*		Web Developer Hiring*/}
							{/*	</Link>*/}
							{/*	<Link*/}
							{/*		to='/'*/}
							{/*		className='text-white text-opacity-80 mb-4'>*/}
							{/*		Getting to know*/}
							{/*	</Link>*/}
							{/*	<Link*/}
							{/*		to='/'*/}
							{/*		className='text-white text-opacity-80 mb-4'>*/}
							{/*		About Us*/}
							{/*	</Link>*/}
							{/*	<Link*/}
							{/*		to='/'*/}
							{/*		className='text-white text-opacity-80 mb-4'>*/}
							{/*		Success Stories*/}
							{/*	</Link>*/}
							{/*</div>*/}
						</div>
					</div>
					<div className='col-lg-3 d-flex align-items-lg-end flex-column'>
						<div>
							<Link to='/' className='d-flex align-items-center'>
								<div className='w-37px h-37px rounded-circle bg-danger center'>
									<i className='fa-solid fa-envelope text-white fs-17'></i>
								</div>
								<span className='text-white ms-3 text-opacity-80'>
									help@molerat.com
								</span>
							</Link>
							<Link
								to='/'
								className='d-flex align-items-center mt-5'>
								<div className='w-37px h-37px rounded-circle bg-danger center'>
									<i className='fa-solid fa-phone text-white fs-17'></i>
								</div>
								<span className='text-white text-opacity-80 ms-3'>
									1212-121-1211
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer
