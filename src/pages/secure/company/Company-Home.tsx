import { useLazyQuery, useMutation } from '@apollo/client'
import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import AllCaughtUp from '../../../components/reusable/AllCaughtUp'
import UserCard from '../../../components/secure/company/UserCard'
import MatchCongratulationModel from '../../../components/secure/user/matchCongratulationModel'
import SkeletonCard from '../../../components/skeleton/SkeletonCard'
import MatchToJobSeekerMutation from '../../../graphql/mutations/match-to-user.mutation'
import RejectJobSeekerMutation from '../../../graphql/mutations/reject-user.mutation'
import MeQuery from '../../../graphql/queries/me.query'
import UsersQuery from '../../../graphql/queries/users.query'
import { userRolesTypes } from '../../../types/user-roles.type'

const CompanyHome = () => {
	const [getUsers, { loading: loadingUsers, data: dataUsers }] = useLazyQuery(
		UsersQuery,
		{
			fetchPolicy: 'no-cache',
		}
	)

	const [getMe, { loading: loadingMe, data: dataMe }] = useLazyQuery(MeQuery)

	const [matchToJobSeeker, { loading: loadingMatchToJobSeeker }] =
		useMutation(MatchToJobSeekerMutation, {
			onCompleted: (data) => {
				const isUserInMatches = data.matchToJobSeeker.matches.find(
					(match: any) => match.id === currentUser.id
				)
				if (isUserInMatches) {
					handleOpenCongratulationModel()
				}
				handleNextUser()
			},
			onError: (error) => {
				toast.error(error.message)
				handleNextUser()
			},
		})

	const [rejectJobSeeker, { loading: loadingRejectJobSeeker }] = useMutation(
		RejectJobSeekerMutation,
		{
			onCompleted: (data) => {
				handleNextUser()
			},
			onError: (error) => {
				toast.error(error.message)
				handleNextUser()
			},
		}
	)

	const [usersData, setUsersData] = React.useState<any>([])
	const [currentUser, setCurrentUser] = React.useState<any>(null)
	const [currentUserIndex, setCurrentUserIndex] = React.useState<number>(0)
	const [showCongratulationModel, setShowCongratulationModel] =
		React.useState<boolean>(false)

	const handleNextUser = () => {
		setCurrentUserIndex(currentUserIndex + 1)
	}

	const handleCloseCongratulationModel = () => {
		setShowCongratulationModel(false)
	}

	const handleOpenCongratulationModel = () => {
		setShowCongratulationModel(true)
	}

	useEffect(() => {
		getUsers()
		getMe()
	}, [])

	useEffect(() => {
		const jobSeekers = dataUsers?.users.filter((user: any) =>
			user.accountType.includes(userRolesTypes.UserRole)
		)
		setUsersData(jobSeekers)
	}, [dataUsers])

	useEffect(() => {
		if (usersData) {
			if (currentUserIndex < usersData.length) {
				setCurrentUser(usersData[currentUserIndex])
			}
		}
	}, [usersData, currentUserIndex])

	return (
		<div>
			<section className='center min-vh-md-90 mt-md-0 mt-6'>
				{loadingUsers ? (
					<SkeletonCard />
				) : (!usersData?.userrs && !currentUser) ||
				  currentUserIndex === usersData.length ? (
					<AllCaughtUp />
				) : (
					<UserCard
						currentUser={currentUser}
						matchToJobSeeker={matchToJobSeeker}
						rejectJobSeeker={rejectJobSeeker}
						loadingRejectJobSeeker={loadingRejectJobSeeker}
						loadingMatchToJobSeeker={loadingMatchToJobSeeker}
					/>
				)}
			</section>
			<MatchCongratulationModel
				show={showCongratulationModel}
				handleClose={handleCloseCongratulationModel}
			/>
		</div>
	)
}

export default CompanyHome
