import { Link } from 'react-router-dom'
import featureCardsJson, {
	IFeatureCardType,
} from '../../json/FeatureCards.json'

const Features = () => {
	return (
		<section className='py-lg-7 mb-8'>
			<header className='text-center w-lg-50 w-md-60 mx-auto'>
				<h2 className='fs-35 mb-4'>Features</h2>
				<p className='text-secondary'>
					Lörem ipsum ben krobåns tilasade. Kas pred Lörem ipsum ben
					krobåns tilasade. Kas pred liksom mirat. Fusas exoren och
					prelig saskap än sokogt.
				</p>
			</header>
			<main className='container px-md-8 mt-7'>
				<section className='row row-cols-lg-2 row-cols-xl-3 row-cols-md-2 row-cols-1 gx-sm-5 gy-5'>
					{featureCardsJson.map(
						(card: IFeatureCardType, index: number) => {
							return (
								<FeatureCard
									card={card}
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

interface FeatureCardProps {
	card: IFeatureCardType
}

const FeatureCard = ({ card }: FeatureCardProps) => {
	return (
		<article className='cold'>
			<div
				className='w-md-auto w-xs-md2 mx-auto shadow-lg rounded-4'
				style={{
					minHeight: '300px',
				}}>
				<section className='px-md-5 px-7 py-md-5 py-7 h-100'>
					<header>
						<div className='h-55px w-55px rounded-circle bg-danger center'>
							<img
								src={card.icon}
								className='w-60'
								alt=''
							/>
						</div>
					</header>
					<main className='mt-5'>
						{card.heading}
						<small className='text-secondary fs-14'>
							{card.description}
						</small>
					</main>
					<footer className='mt-4'>
						<Link
							to={card.link}
							className='btn-link text-danger side-center'>
							<span>Learn More</span>
							<i className='fa-solid ms-3 mt-2px fa-arrow-right'></i>
						</Link>
					</footer>
				</section>
			</div>
		</article>
	)
}

export default Features
