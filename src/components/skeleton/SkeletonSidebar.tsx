import Logo from '../reusable/Logo'

const SkeletonSidebar = () => {
	return (
		<aside className='position-lg-fixed  placeholder-glow custom-scrollbar-y vh-md-100 w-lg-md1 w-100 bg-danger-md bg-opacity-10 py-4 '>
			<div className='center'>
				<Logo />
			</div>
			<header>
				<section className='bg-danger w-100 mt-4 ps-5 pe-5 pe-md-2  py-3 d-flex align-items-center justify-content-between'>
					<div className='d-flex align-items-center'>
						<div className='w-44px h-44px rounded-circle bg-secondary placeholder'></div>
						<h6 className='mb-0 ms-3 text-white w-115px h-26px rounded bg-secondary placeholder'></h6>
					</div>
					<div>
						<div className='w-32px h-32px bg-secondary placeholder rounded-circle me-lg-3 me-5'></div>
						<div className='w-32px h-30px bg-secondary placeholder rounded-3 d-md-none'></div>
					</div>
				</section>
			</header>
			<main className='position-relative'>
				<nav className='navbar px-0 navbar-light navbar-expand-md'>
					<div className='container-fluid px-md-0'>
						<div
							className='offcanvas px-0 offcanvas-end'
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
							<div className='offcanvas-body flex-column pt-0  px-3'>
								<div className='px-4 mt-5'>
									<header className='d-flex w-100'>
										<div className='w-50 h-42px bg-danger placeholder rounded-2'></div>
										<div className='w-50 h-42px bg-dark bg-opacity-25 placeholder rounded-2 ms-5'></div>
									</header>
									<div className='row gy-4 mt-3'>
										<div className='col-md-6 col-4'>
											<div className='card bg-dark bg-opacity-25 placeholder center p-2 rounded-4 border-0  h-s w-s h-lg-s1 w-lg-s1'></div>
										</div>
										<div className='col-md-6 col-4'>
											<div className='card bg-dark bg-opacity-25 placeholder center p-2 rounded-4 border-0  h-s w-s h-lg-s1 w-lg-s1'></div>
										</div>
										<div className='col-md-6 col-4'>
											<div className='card bg-dark bg-opacity-25 placeholder center p-2 rounded-4 border-0  h-s w-s h-lg-s1 w-lg-s1'></div>
										</div>
										<div className='col-md-6 col-4'>
											<div className='card bg-dark bg-opacity-25 placeholder center p-2 rounded-4 border-0  h-s w-s h-lg-s1 w-lg-s1'></div>
										</div>
										<div className='col-md-6 col-4'>
											<div className='card bg-dark bg-opacity-25 placeholder center p-2 rounded-4 border-0  h-s w-s h-lg-s1 w-lg-s1'></div>
										</div>
										<div className='col-md-6 col-4'>
											<div className='card bg-dark bg-opacity-25 placeholder center p-2 rounded-4 border-0  h-s w-s h-lg-s1 w-lg-s1'></div>
										</div>
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

export default SkeletonSidebar
