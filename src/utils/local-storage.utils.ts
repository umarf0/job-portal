const iStorage = {
	setCurrentUserSignUpStep: (step: number) => {
		localStorage.setItem('currentUserSignUpStep', step.toString())
	},
	getCurrentUserSignUpStep: () => {
		return localStorage.getItem('currentUserSignUpStep')
	},
}

export default iStorage
