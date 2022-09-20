import { gql } from '@apollo/client'

const SingleUploadMutation = gql`
	mutation SingleUpload($file: Upload!) {
		singleUpload(file: $file) {
			uri
			filename
			mimetype
			encoding
		}
	}
`

export default SingleUploadMutation
