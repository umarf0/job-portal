import React from 'react'
import { userRolesTypes } from '../../types/user-roles.type'

interface Iprops {
	role: userRolesTypes
	setRole: (role: userRolesTypes) => void
}

const SignUpHeader = ({ role, setRole }: Iprops) => {
	return (
		<header>
			<div className='text-center'>
				<h4>Lets get started</h4>
				{/*<p>Lörem ipsum ben krobåns tilasade</p>*/}
			</div>
			<div className='d-flex justify-content-center'>
				<ul className='nav nav-pills bg-light p-7px rounded-7'>
					<li
						className='nav-item cursor'
						onClick={() => setRole(userRolesTypes.CompanyRole)}>
						<span
							className={`${
								role === userRolesTypes.CompanyRole && 'active'
							} nav-link fw-bold`}
							aria-current='page'>
							Company
						</span>
					</li>
					<li
						className='nav-item cursor'
						onClick={() => setRole(userRolesTypes.UserRole)}>
						<span
							className={`${
								role === userRolesTypes.UserRole && 'active'
							} nav-link fw-bold`}>
							Job Seeker
						</span>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default SignUpHeader
