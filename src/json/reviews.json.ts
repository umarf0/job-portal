export interface IReviewType {
	id: string
	comment: string
	name: string
	rating: number
	position: string
	img: string
}

const reviewsJson: IReviewType[] = [
	{
		id: '1',
		comment:
			'lorem ipsum , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ariatur. Excepteur sint occaecat  deserunt mollit anim id est laborum.',
		name: 'John Doe',
		position: 'CEO',
		rating: 5,
		img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
	},
	{
		id: '2',
		comment:
			'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim uptate velit esse cillum dolore eu fugiat nulla pariatur.',
		name: 'Alex Smith',
		position: 'CTO',
		rating: 5,
		img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
	},
	{
		id: '1',
		comment:
			'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  pariatur.',
		name: 'Sara Khan',
		position: 'CEO',
		rating: 5,
		img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
	},
]

export default reviewsJson
