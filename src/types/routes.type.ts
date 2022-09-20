import { ComponentElement } from 'react'
import { userRolesTypes } from './user-roles.type'

export interface IRoute {
	path: string
	element: React.FunctionComponent<any>
	exact?: boolean
	index?: boolean
	childrens?: IRoute[]
	type:
		| 'public'
		| 'secure'
		| 'auth'
		| userRolesTypes.CompanyRole
		| userRolesTypes.UserRole
		| null
}

export enum Routes {
	Home = '/',
	Login = '/login',
	SignUp = '/signup',
	CompleteProfile = '/complete-profile',
	Register = '/register',
	Matches = '/matches',
	Dashboard = '/dashboard/',
	Products = '/products',
	Learn = '/learn',
	Safety = '/safety',
	Support = '/support',
	SignUpUserSteps = '/user-steps',
	SignUpCompanyStep = '/company',
	CompanyViewJobs = '/view-jobs',
	CreateJob = '/create-job',
	UpdateJob = '/update-job/:id',
	Update_Profile = '/update-profile',
	Messages = '/messages',
	MessagesChat = '/messages/:id',
}
