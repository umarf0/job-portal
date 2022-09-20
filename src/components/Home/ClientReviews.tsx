import React from 'react'
import Avatar from '../reusable/Avatar'
import reviewsJson, { IReviewType } from '../../json/home/reviews.json'

const ClientReviews = () => {
	const [currentReviewIndex, setCurrentReviewIndex] = React.useState(0)

	const handleNextReview = () => {
		if (currentReviewIndex < reviewsJson.length - 1) {
			setCurrentReviewIndex(currentReviewIndex + 1)
		}
	}

	const handlePreviousReview = () => {
		if (currentReviewIndex > 0) {
			setCurrentReviewIndex(currentReviewIndex - 1)
		}
	}

	return (
		<section className='container'>
			<div className='row gx-sm-9 gy-5'>
				<section className='col-md-5'>
					<h1
						className='display-6 fw-bold'
						style={{ lineHeight: '1.4' }}>
						What our clients
						<br /> say about us
					</h1>
					<p className='pe-7 text-secondary'>
						Lörem ipsum ben krobåns tilasade. Kas pred liksom mirat.
						Fusas exoren och prelig saskap än sokogt.
					</p>
				</section>
				<section className='col-md-7'>
					<Review
						review={reviewsJson[currentReviewIndex]}
						handleNextReview={handleNextReview}
						handlePreviousReview={handlePreviousReview}
						currentReviewIndex={currentReviewIndex}
						totalReviews={reviewsJson.length}
					/>
				</section>
			</div>
		</section>
	)
}

interface IReview {
	review: IReviewType
	handleNextReview: () => void
	handlePreviousReview: () => void
	currentReviewIndex: number
	totalReviews: number
}

const Review = ({
	review,
	handleNextReview,
	handlePreviousReview,
	currentReviewIndex,
	totalReviews,
}: IReview) => {
	return (
		<article>
			<header>
				<p
					className='fs-18 text-secondary'
					style={{ fontStyle: 'italic' }}>
					" {review.comment} "
				</p>
			</header>
			<main className='d-flex justify-content-between align-items-center mt-6'>
				<div className='d-flex '>
					<Avatar img={review.img} />
					<div className='mt-1 ms-4'>
						<h6 className='mb-1'>{review.name}</h6>
						<small className='fs-13'>{review.position}</small>
					</div>
				</div>
				<section className='side-center'>
					<button
						className={` ${
							currentReviewIndex !== 0 && 'bg-danger text-white'
						} btn rounded-circle w-35px h-35px center`}
						onClick={handlePreviousReview}
						disabled={currentReviewIndex === 0}>
						<i className='fa-solid fa-angle-left'></i>
					</button>
					<button
						disabled={currentReviewIndex === totalReviews - 1}
						className={`btn ${
							currentReviewIndex === totalReviews - 1
								? 'bg-white text-dark'
								: 'text-white'
						} ms-3 rounded-circle w-35px bg-danger h-35px center`}
						onClick={handleNextReview}>
						<i className='fa-solid fa-angle-right'></i>
					</button>
				</section>
			</main>
		</article>
	)
}

export default ClientReviews
