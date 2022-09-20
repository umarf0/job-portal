import { Link, NavLink } from 'react-router-dom'
import { Routes } from '../../types/routes.type'
interface Iprops {
	activeSection: string
	handleSectionChange: (section: string) => void
}

const NavSideBar = ({ handleSectionChange, activeSection }: Iprops) => {
	return (
		<nav className='nav nav-pills-sm nav-fill mt-md-5 '>
			<li className='nav-item'>
				<NavLink
					to={Routes.Matches}
					className={({ isActive }) => {
						return `nav-link py-3 fw-medium fs-15 ${
							isActive && 'bg-danger text-black bg-opacity-75'
						}`
					}}>
					Matches
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink
					to={Routes.Messages}
					className={({ isActive }) => {
						return `nav-link py-3 fw-medium fs-15 ${
							isActive && 'bg-danger text-black bg-opacity-75'
						}`
					}}>
					Messages
				</NavLink>
			</li>
		</nav>
	)
}

export default NavSideBar
