import { UserAction, UserActionTypes } from '../../types/store/user-store.type'

export const userLoginStart = (): UserAction => ({
	type: UserActionTypes.USER_LOGIN_START,
})

export const userLoginSuccess = (role: string): UserAction => ({
	type: UserActionTypes.USER_LOGIN_SUCCESS,
	payload: role,
})

export const userLoginFailure = (): UserAction => ({
	type: UserActionTypes.USER_LOGIN_FAILURE,
})

export const userLogout = (): UserAction => ({
	type: UserActionTypes.USER_LOGOUT,
})
