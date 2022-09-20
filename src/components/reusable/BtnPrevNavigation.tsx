import { useNavigate } from 'react-router-dom'

interface Iprops {
	marginBottom?: string
}

const PreviousNavigationBtn = ({ marginBottom }: Iprops) => {
	const navigate = useNavigate()
	const handlePreviousStep = () => {
		navigate(-1)
	}

	return (
		<button
			onClick={handlePreviousStep}
			className={`w-40px px-0 h-40px bg-secondary rounded-circle justify-content-center align-items-center  btn  ${
				marginBottom || 'mb-5'
			} `}>
			<i className='fa-solid fa-chevron-left'></i>
		</button>
	)
}

export default PreviousNavigationBtn
