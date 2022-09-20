import { Navigate, Route } from 'react-router-dom'
import { IRoute, Routes } from '../types/routes.type'

const ProtectedRoute = ({ isAuthenticated, children, routeType }: any) => {
	if (isAuthenticated && routeType === 'secure') {
		return children
	}

	if (!isAuthenticated && routeType == 'auth') {
		return children
	}

	if (routeType == 'public') {
		return children
	}

	return <Navigate to={Routes.Home} />
}

const ChildProtectedRoute = ({ children, routeType, currentUserRole }: any) => {
	if (!routeType) {
		return children
	}
	if (currentUserRole == routeType) {
		return children
	}

	return <Navigate to={Routes.Matches} />
}

const RenderRoutes = (
	routes: IRoute[],
	isAuthenticated: boolean,
	currentUserRole: string
) => {
	return routes.map((route: IRoute, index: number) => {
		return (
			<Route
				path={route.path}
				key={index}
				index={route.index}
				element={
					<ProtectedRoute
						isAuthenticated={isAuthenticated}
						routeType={route.type}>
						<route.element />
					</ProtectedRoute>
				}>
				{route.childrens &&
					route.childrens.length > 0 &&
					renderNestedRoutes(route.childrens, currentUserRole)}
			</Route>
		)
	})
}

export const renderNestedRoutes = (
	routes: IRoute[],
	currentUserRole: string
) => {
	return routes.map((route: IRoute, index: number) => {
		const path = route.path.startsWith('/')
			? route.path.slice(1)
			: route.path

		return (
			<Route
				path={path}
				key={index}
				element={
					<ChildProtectedRoute
						routeType={route.type}
						currentUserRole={currentUserRole}>
						<route.element childRoutes={route.childrens} />
					</ChildProtectedRoute>
				}>
				{route.childrens &&
					route.childrens.length > 0 &&
					renderNestedRoutes(route.childrens, currentUserRole)}
			</Route>
		)
	})
}

export default RenderRoutes
