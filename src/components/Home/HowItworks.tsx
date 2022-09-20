import React from 'react'
import workGuideJson, { IworkGuideType } from '../../json/workGuide.json'

const HowItWorks = () => {
	return (
		<section className='py-7 px-md-7 px-4 mt-8 mb-8 bg-danger bg-opacity-10'>
			<header className='text-center w-lg-50 w-md-60 mx-auto'>
				<h2 className='fs-35 mb-4'>How it works</h2>
				<p className='text-secondary'>
					Lörem ipsum ben krobåns tilasade. Kas pred Lörem ipsum ben
					krobåns tilasade. Kas pred liksom mirat. Fusas exoren och
					prelig saskap än sokogt.
				</p>
			</header>
			<main className='container mt-7'>
				<section className='row position-relative row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 gx-sm-5 gy-5'>
					<img
						src='/assets/icons/howitworksLineIndicator.svg'
						alt=''
						className='w-100 translate-center-middle d-xl-block d-none'
						style={{ zIndex: -1 }}
					/>
					{workGuideJson.map(
						(card: IworkGuideType, index: number) => {
							return (
								<WorkGuideCard
									card={card}
									index={index}
									key={index}
								/>
							)
						}
					)}
				</section>
			</main>
		</section>
	)
}

interface IWorkGuideCardProps {
	card: IworkGuideType
	index: number
}

const WorkGuideCard = ({ card, index }: IWorkGuideCardProps) => {
	return (
		<article className='col min-h-md '>
			<div
				className='w-md-auto w-xs-md2 mx-auto shadow-lg rounded-4 bg-white'
				style={{
					minHeight: '300px',
				}}>
				<section className='px-md-5  px-7 py-md-5 py-7 h-100'>
					<header className='center flex-column'>
						<img
							src={card.icon}
							className='h-53px'
							alt=''
						/>
						<div className='bg-dark-blue h-43px mt-5 text-white center w-43px fw-bold fs-17 rounded-circle'>
							{index + 1}.
						</div>
					</header>
					<main className='mt-5'>
						<h6 className='fs-18 text-center'>{card.heading}</h6>
						<small className='text-secondary fs-14'>
							{card.description}
						</small>
					</main>
				</section>
			</div>
		</article>
	)
}

export default HowItWorks
