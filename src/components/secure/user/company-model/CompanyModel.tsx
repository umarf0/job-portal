import React from 'react'
import { Modal } from 'react-bootstrap'
import CompanyDetails from './CompanyDetails'
import CompanyOpenings from './CompanyJobs'
import CompanyModelHeader from './CompanyModelHeader'

interface Iprops {
	show: boolean
	handleClose: () => void
	currentCompany: any
}

const CompanyModel = ({ show, handleClose, currentCompany }: Iprops) => {
	return (
		<Modal
			show={show}
			onHide={handleClose}
			dialogClassName='max-vw-lg-70 max-vw-md-80 w-100 max-vw-sm-90'>
			<Modal.Header className='border-0 px-5 pt-5'>
				<section className='w-100'>
					<CompanyModelHeader
						handleClose={handleClose}
						currentCompany={currentCompany}
					/>
				</section>
			</Modal.Header>
			<Modal.Body className='px-6 pb-5 '>
				<section className='border-top pt-5'>
					<CompanyDetails currentCompany={currentCompany} />
					<CompanyOpenings currentCompany={currentCompany} />
				</section>
			</Modal.Body>
		</Modal>
	)
}

export default CompanyModel
