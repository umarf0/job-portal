import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { createUploadLink } from 'apollo-upload-client'
import iCookies from '../utils/cookies.utils'
const env = import.meta.env as any

const authLink: any = setContext((_, { headers }) => {
	const authHeader: any = {}
	const token = iCookies.getToken()
	if (token) {
		authHeader['Authorization'] = `${token}`
	}
	return {
		headers: {
			...headers,
			...authHeader,
		},
	}
})

const httpLink: any = createUploadLink({
	uri: env.VITE_APP_API_URL,
})

const client = new ApolloClient({
	link: ApolloLink.from([authLink, httpLink]),
	cache: new InMemoryCache(),
})

export default client
