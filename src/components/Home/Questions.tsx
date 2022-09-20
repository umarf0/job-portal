import React from 'react'
import questionsJson, { IQuestionsType } from '../../json/home/questions.json'

const Questions = () => {
	return (
		<section className='bg-danger bg-opacity-10 mt-9 py-8'>
			<section className='container'>
				<main className='row gx-sm-7 gy-6'>
					<section className='col-md-4'>
						<h1
							className='display-6 fw-bold'
							style={{ lineHeight: '1.4' }}>
							Frequently asked
							<br /> questions
						</h1>
						<span className='text-danger'>
							Contact us for more info
						</span>
					</section>
					<section className='col-md-8'>
						{questionsJson.map(
							(question: IQuestionsType, index: number) => {
								return (
									<Accordion
										question={question}
										index={index}
										key={index}
									/>
								)
							}
						)}
					</section>
				</main>
			</section>
		</section>
	)
}

interface AccordionType {
	question: IQuestionsType
	index: number
}

const Accordion = ({ question, index }: AccordionType) => {
	let indexNumber = index + 1
	return (
		<div className='accordion'>
			<div className='accordion-item py-4'>
				<h2 className='accordion-header' id='headingThree'>
					<button
						className='accordion-button collapsed fw-normal fs-19	py-2 mb-0'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target={'#question' + index}>
						<span className='me-4 text-danger'>
							{' '}
							{indexNumber < 10
								? `0${indexNumber}`
								: indexNumber}{' '}
						</span>
						<span>{question.title}</span>
					</button>
				</h2>
				<div
					id={'question' + index}
					className='accordion-collapse collapse mt-2 mb-0'>
					<div className='accordion-body ms-6 fs-16'>
						{question.description}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Questions
