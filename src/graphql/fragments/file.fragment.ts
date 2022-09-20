import { gql } from '@apollo/client'

const FileFragment = gql`
	fragment logo on File {
		uri
		filename
		mimetype
		encoding
	}
`

export default FileFragment
