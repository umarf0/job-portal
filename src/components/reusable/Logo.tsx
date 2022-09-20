import { Link } from 'react-router-dom'
import { Routes } from '../../types/routes.type'
import logourl from '/assets/imgs/logo.png'

interface Iprops {
	logoFirstCircleColor?: string
	logoSecondCircleColor?: string
	withTitle?: boolean
	titleColor?: string
}

const Logo = ({
	withTitle,
	logoFirstCircleColor,
	logoSecondCircleColor,
	titleColor,
}: Iprops) => {
	return (
		<Link
			className='navbar-brand d-flex alig-items-center'
			to={Routes.Home}>
			<section className='d-flex align-items-center'>
				<img src={logourl} alt="" className={"logo-new"} />
			</section>
		</Link>
	)
}

export default Logo
