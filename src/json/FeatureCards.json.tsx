export interface IFeatureCardType {
	heading: string | JSX.Element
	description: string
	icon: string
	link: string
}

const featureCardsJson: IFeatureCardType[] = [
	{
		heading: (
			<h5 className='fs-18'>
				<span className='text-danger'>#1</span> Trusted Hiring App
			</h5>
		),
		description:
			'Lörem ipsum ben krobåns tilasade. Kas pred liksom mirat. Fusas exoren och prelig saskap än sokogt.',
		icon: '/assets/icons/featureIcon1.svg',
		link: '/',
	},
	{
		heading: (
			<h5 className='fs-18'>
				Every <span className='text-danger'>14 minutes</span>, Company
				Hires Someone
			</h5>
		),
		description:
			'Lörem ipsum ben krobåns tilasade. Kas pred liksom mirat. Fusas exoren och prelig saskap än sokogt.',
		icon: '/assets/icons/featureIcon2.svg',
		link: '/',
	},
	{
		heading: (
			<h5 className='fs-18'>
				High Quality <span className='text-danger'>Applicants</span>
				Pool
			</h5>
		),
		description:
			'Lörem ipsum ben krobåns tilasade. Kas pred liksom mirat. Fusas exoren och prelig saskap än sokogt.',
		icon: '/assets/icons/featureIcon3.svg',
		link: '/',
	},
]

export default featureCardsJson
