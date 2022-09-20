import { lazy } from 'react'
import { userRolesTypes } from '../types/user-roles.type'
import { IRoute, Routes } from '../types/routes.type'

export const publicRoutes: IRoute[] = [
	{
		path: Routes.Home,
		type: 'public',
		element: lazy(() => import('../pages/public/Home')),
		childrens: [],
	},
]

export const secureRoutes: IRoute[] = [
	{
		path: '/',
		type: 'secure',
		element: lazy(() => import('../pages/secure/Dashboard')),
		childrens: [
			{
				path: Routes.Matches,
				type: null,
				element: lazy(() => import('../pages/secure/Matches')),
			},
			{
				path: Routes.Update_Profile,
				type: null,
				element: lazy(() => import('../pages/secure/UpdateProfile')),
			},
			{
				path: Routes.CompanyViewJobs,
				type: userRolesTypes.CompanyRole,
				element: lazy(
					() => import('../pages/secure/company/Company-View-Jobs')
				),
			},
			{
				path: Routes.CreateJob,
				type: userRolesTypes.CompanyRole,
				element: lazy(
					() => import('../pages/secure/company/Company-Create-Job')
				),
			},
			{
				path: Routes.UpdateJob,
				type: userRolesTypes.CompanyRole,
				element: lazy(
					() => import('../pages/secure/company/Company-update-Job')
				),
			},
			{
				path: Routes.Messages,
				type: null,
				element: lazy(() => import('../pages/secure/Messages')),
			},
			{
				path: Routes.MessagesChat,
				type: null,
				element: lazy(() => import('../pages/secure/Messages')),
			},
		],
	},
]

export const authRoutes: IRoute[] = [
	{
		path: Routes.SignUp,
		type: 'auth',
		element: lazy(() => import('../pages/auth/SignUp')),
	},
	{
		path: Routes.CompleteProfile,
		type: 'auth',
		element: lazy(
			() => import('../components/signup/SignupCompleteProfile')
		),
	},
	{
		path: Routes.Login,
		type: 'auth',
		element: lazy(() => import('../pages/auth/Login')),
	},
]

export const signupStepsRoutes: IRoute[] = [
	{
		path: Routes.SignUpUserSteps,
		type: 'auth',
		element: lazy(
			() =>
				import('../components/signup/userSteps/CreateUserProfileSteps')
		),
	},
	{
		path: Routes.SignUpCompanyStep,
		type: 'auth',
		element: lazy(
			() => import('../components/signup/company/CreateCompanyProfile')
		),
	},
]
