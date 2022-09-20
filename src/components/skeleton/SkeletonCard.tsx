const SkeletonCard = () => {
	return (
		<section className='w-sm-lg w-md2 placeholder-glow '>
			<div className='card p-5  py-6 text-center shadow-lg border-0 rounded-5'>
				<div className='text-center mt-3'>
					<div className='card-img-top w-100px h-100px placeholder bg-dark bg-opacity-20 rounded-circle shadow-lg  p-1'></div>
				</div>
				<div className='card-body mt-3'>
					<div className='mb-20px'>
						<div>
							<div className='card-title mb-2 w-180px h-30px placeholder bg-dark bg-opacity-20 rounded-2'></div>
						</div>
						<small className='text-danger fs-14'>
							<div className='card-title mb-2 w-120px h-23px placeholder bg-dark bg-opacity-20 rounded-2'></div>
						</small>
					</div>
					<small className='card-text fs-16'>
						<div className='card-title mb-2 w-90 h-79px placeholder bg-dark bg-opacity-20 rounded-2'></div>
					</small>
					<div className='d-flex center mt-30px'>
						<div className='w-58px h-58px placeholder bg-dark bg-opacity-20  center rounded-circle me-5 '></div>
						<div className='w-58px h-58px placeholder bg-dark bg-opacity-20  center rounded-circle '></div>
					</div>
				</div>
			</div>
			<div className='card rounded-4 text-center shadow border-0 py-3 mx-2'></div>
			<div className='card rounded-4 text-center shadow border-0 py-3 mx-4'></div>
			<div className='card rounded-4 text-center shadow border-0 py-3 mx-5'></div>
		</section>
	)
}

export default SkeletonCard
