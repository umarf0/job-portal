import {
	UserState,
	UserAction,
	UserActionTypes,
	initialState,
} from '../../types/store/user-store.type'

const userReducer = (
	state: UserState = initialState,
	action: UserAction
): UserState => {
	switch (action.type) {
		case UserActionTypes.USER_LOGIN_START:
			return {
				...state,
				loading: true,
				error: null,
				currentUserRole: null,
				isAuthenticated: false,
			}
		case UserActionTypes.USER_LOGIN_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				error: null,
				currentUserRole: action.payload,
				loading: false,
			}
		case UserActionTypes.USER_LOGIN_FAILURE:
			return {
				...state,
				error: action.payload,
				isAuthenticated: false,
				currentUserRole: null,
				loading: false,
			}
		case UserActionTypes.USER_LOGOUT:
			return {
				...state,
				loading: false,
				error: null,
				currentUserRole: null,
				isAuthenticated: false,
			}

		default:
			return state
	}
}

export default userReducer
