import React from 'react'

const SkeletonJobPost = () => {
	return (
		<li className='list-group-item  placeholder-glow  border-0 bg-secondary mb-4 p-4 rounded-3 d-flex justify-content-between align-items-center'>
			<div className='d-flex align-items-center'>
				<div className='w-50px h-50px text-white bg-danger rounded-circle center cursor me-4 placeholder'></div>
				<div>
					<h6 className='mb-1 rounded placeholder bg-dark bg-opacity-20 h-5px w-150px d-block'></h6>
					<h6 className='mb-1 rounded placeholder bg-dark bg-opacity-20 h-5px w-90px'></h6>
				</div>
			</div>
			<button className='btn bg-danger rounded-6 py-5px fs-13 text-danger bg-opacity-25 placeholder w-140px bg-dark bg-opacity-20'></button>
			<span className='text-danger placeholder w-70px bg-dark bg-opacity-20 h-25px'></span>
			<div className='d-flex'>
				<div className='w-35px h-35px text-white bg-dark bg-opacity-20 rounded-circle center cursor me-2 placeholder'></div>
				<div className='w-35px h-35px text-white bg-dark bg-opacity-20 rounded-circle center cursor me-2 placeholder'></div>
			</div>
		</li>
	)
}

export default SkeletonJobPost
