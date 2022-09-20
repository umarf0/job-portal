import markets from '../../../../json/markeets.json'
interface Iprops {
	currentCompany: any
}

const CompanyDetails = ({ currentCompany }: Iprops) => {
	return (
		<section>
			<header className='mb-5'>
				<h5>More Info</h5>
			</header>
			<main>
				{currentCompany?.markets.length > 0 && (
					<div className='d-flex align-items-center mb-5'>
						<p className='text-black mb-0 me-7'>Markets</p>
						<div>
							{currentCompany.markets.map(
								(market: string, index: number) => {
									const marketItem = markets.find(
										(item) => item.value === market
									)
									return (
										<span
											className='text-danger'
											key={index}>
											{marketItem?.label}
										</span>
									)
								}
							)}
						</div>
					</div>
				)}
				{currentCompany.type && (
					<div className='d-flex align-items-center mb-5'>
						<p className='text-black mb-0 me-7'>Type</p>
						<span className='text-danger'>
							{currentCompany.type}
						</span>
					</div>
				)}
			</main>
		</section>
	)
}

export default CompanyDetails
