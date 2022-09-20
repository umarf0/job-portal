import { Modal } from 'react-bootstrap'

interface Iprops {
	show: boolean
	handleClose: () => void
}

const MatchCongratulationModel = ({ show, handleClose }: Iprops) => {
	return (
		<Modal
			show={show}
			onHide={handleClose}
			dialogClassName='max-vw-lg-50 max-vw-md-80 w-100 max-vw-sm-90 position-relative'>
			<Modal.Header className='border-0 px-5 pt-5 justify-content-end'>
				<button
					className='btn w-37px h-37px rounded-circle bg-light center p-0'
					onClick={handleClose}>
					<i className='fa-solid fa-xmark fs-21 text-secondary'></i>
				</button>
			</Modal.Header>
			<Modal.Body
				className='h-md2'
				style={{
					overflowY: 'auto',
				}}>
				<section
					className='position-relative'
					style={{ marginTop: '-65px' }}>
					<img
						src='/assets/icons/winflags.svg'
						className='w-50 mt-1 top-0 translate-right-top'
						style={{
							left: '-100px',
						}}
						alt=''
					/>
					<img
						src='/assets/icons/winflagsRight.svg'
						className='w-50 top-0 translate-right-top'
						style={{
							right: '-74px',
						}}
						alt=''
					/>
				</section>
				<section
					className='center flex-column'
					style={{
						marginTop: '150px',
					}}>
					<img
						src='/assets/icons/winFlowers.svg'
						alt=''
						style={{
							width: '20%',
							marginLeft: '-30px',
						}}
					/>
					<p className='mt-6 fs-20 w-75 text-center'>
						Hurray! You got Matched, Message them to discuss more
					</p>
				</section>
			</Modal.Body>
		</Modal>
	)
}

export default MatchCongratulationModel
