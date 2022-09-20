import HeroSection from '../../components/Home/HeroSection'
import Footer from '../../components/reusable/Footer'
import Navbar from '../../components/reusable/Navbar'

const Home = () => {
	return (
		<section>
			<header className='position-relative mb-md-10 mb-8'>
				<div className='position-absolute w-100'>
					<Navbar />
				</div>
				<main>
					<HeroSection />
				</main>
			</header>
			{/*<Features />*/}
			{/*<HowItWorks />*/}
			{/*<ClientReviews />*/}
			{/*<Questions />*/}
			<Footer />
		</section>
	)
}

export default Home
