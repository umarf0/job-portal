import Cookies from 'js-cookie'

const iCookies = {
	setToken: (token: string) => {
        Cookies.set('token', token)
    },
    getToken: () => {
        return Cookies.get('token')
    },
    removeToken: () => {
        Cookies.remove('token')
    },
    setRole: (role: string) => {
        Cookies.set('role', role)
    },
    getRole: () => {
        return Cookies.get('role')
    },
    removeRole: () => {
        Cookies.remove('role')
    }
}

export default iCookies
