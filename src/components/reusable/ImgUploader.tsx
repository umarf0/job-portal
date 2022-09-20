import React, { useEffect } from 'react'
import Spinner from './Spinner'

interface Iprops {
	handleGetImg: (e: any) => void
	defaultImg?: any
	loading?: boolean
	label?: string
}

const ImgUploader = ({ handleGetImg, defaultImg, loading, label }: Iprops) => {
	const [imgValue, setImgValue] = React.useState<any>(null)

	useEffect(() => {
		setImgValue(defaultImg)
	}, [defaultImg])

	const handleChange = ({
		target: {
			validity,
			files: [file],
		},
	}: any) => {
		if (loading) return
		if (!validity.valid) return
		handleGetImg({
			name: 'profileImg',
			value: file,
		})
		if (file) {
			const reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = () => {
				setImgValue(reader.result)
			}
		}
	}

	return (
		<section>
			<label className='d-flex align-items-center'>
				<input type='file' className='d-none' onChange={handleChange} />
				<div
					className='w-65px h-65px rounded-circle bg-secondary center cursor'
					style={{
						border: '1px dashed #D4D4D4',
					}}>
					{imgValue ? (
						<img
							src={imgValue}
							className='w-100 h-100 rounded-circle'
						/>
					) : (
						<img src='/assets/icons/camera.svg' className='w-50' />
					)}
				</div>
				<div
					className={`${
						loading && 'bg-opacity-50'
					} btn btn-danger ms-5 text-white`}>
					{loading ? (
						<Spinner size='sm' />
					) : label ? (
						label
					) : (
						'Choose Profile Photo'
					)}
				</div>
			</label>
		</section>
	)
}

export default ImgUploader
