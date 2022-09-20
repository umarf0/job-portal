export interface IworkGuideType {
	heading: string | JSX.Element
	description: string
	icon: string
}

const workGuideJson: IworkGuideType[] = [
	{
		heading: 'Create Account',
		description:
			'Lörem ipsum ben krobåns tilasade. Kas pred liksom mirat. Fusas exoren och prelig saskap än sokogt.',
		icon: '/assets/icons/howItWorksIcon1.svg',
	},
	{
		heading: 'Add/View Job Post',
		description:
			'Lörem ipsum ben krobåns tilasade. Kas pred liksom mirat. Fusas exoren och prelig saskap än sokogt.',
		icon: '/assets/icons/howItWorksIcon2.svg',
	},
	{
		heading: 'Match Or Unmatch',
		description:
			'Lörem ipsum ben krobåns tilasade. Kas pred liksom mirat. Fusas exoren och prelig saskap än sokogt.',
		icon: '/assets/icons/howItWorksIcon3.svg',
	},
	{
		heading: 'Messages',
		description:
			'Lörem ipsum ben krobåns tilasade. Kas pred liksom mirat. Fusas exoren och prelig saskap än sokogt.',
		icon: '/assets/icons/howItWorksIcon4.svg',
	},
]

export default workGuideJson
