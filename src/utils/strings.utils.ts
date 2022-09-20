const stringUtils = {
	splitCamelCase: (str: string) => {
		return str.split('').reduce((result: string, char: string) => {
			if (
				result[result.length - 1] >= 'A' &&
				result[result.length - 1] <= 'Z'
			) {
				return result + char
			} else if (char >= 'A' && char <= 'Z') {
				return result + ' ' + char
			}
			return result + char
		}, '')
	},
	captalize: (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1)
	},
	joinName: function (firstName: string, lastName: string) {
		return `${this.captalize(firstName)} ${this.captalize(lastName)}`
	},
}

export default stringUtils
