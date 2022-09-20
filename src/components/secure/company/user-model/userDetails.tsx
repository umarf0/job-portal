interface Iprops {
	currentUser: any
}

const UserDetails = ({ currentUser }: Iprops) => {
	return (
		<section>
			<header className='mb-5'>
				<h5>More Info</h5>
			</header>
			<main className='row gy-5 gy-lg-4 gx-0 gx-lg-0 flex-wrap px-0'>
				{currentUser.lookingFor && (
					<div className='col-lg-3 col-6'>
						<p className='text-black mb-4'>Ethereum Domain Name</p>
						<span className='text-danger'>
							{currentUser.lookingFor}
						</span>
					</div>
				)}
				{currentUser.hereTo && (
					<div className='col-lg-3 col-6'>
						<p className='text-black mb-4'>Here To </p>
						<span className='text-secondary'>
							{currentUser.hereTo}
						</span>
					</div>
				)}

				{currentUser.openToRoles.length > 0 && (
					<div className='col-lg-3 col-6'>
						<p className='text-dark mb-4'>Open to Roles</p>
						<div className='side-center flex-wrap'>
							{currentUser.openToRoles.map(
								(role: any, index: number) => {
									return (
										<div
											key={index}
											className='btn mb-3 bg-danger text-white rounded-pill me-3'>
											{role}
										</div>
									)
								}
							)}
						</div>
					</div>
				)}
				{currentUser.currentRole && (
					<div className='col-lg-12'>
						<p className='text-black mb-4'>Current Role</p>
						<div className='btn bg-danger text-white rounded-pill'>
							{currentUser.currentRole}
						</div>
					</div>
				)}
			</main>
		</section>
	)
}

export default UserDetails
