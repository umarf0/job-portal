import { useLazyQuery, useMutation } from '@apollo/client'
import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import AllCaughtUp from '../../../components/reusable/AllCaughtUp'
import CompanyModel from '../../../components/secure/user/company-model/CompanyModel'
import CompanyCard from '../../../components/secure/user/CompanyCard'
import MatchCongratulationModel from '../../../components/secure/user/matchCongratulationModel'
import SkeletonCard from '../../../components/skeleton/SkeletonCard'
import ApplyToJobPostingMutation from '../../../graphql/mutations/apply-job-post.mutation'
import RejectJobPostingMutation from '../../../graphql/mutations/reject-job-post.mutation'
import JobPostingsQuery from '../../../graphql/queries/job-postings.query'
import MeQuery from '../../../graphql/queries/me.query'

const UserHome = () => {
	const [
		getJobPostings,
		{ loading: loadingJobPostings, data: dataJobPostings },
	] = useLazyQuery(JobPostingsQuery, {
		fetchPolicy: 'no-cache',
	})

	const [getMe, { loading: loadingMe, data: dataMe }] = useLazyQuery(MeQuery)
	const [
		applyToJobPosting,
		{ loading: loadingApplyToJobPosting, data: dataApplyToJobPosting },
	] = useMutation(ApplyToJobPostingMutation, {
		onCompleted: (data) => {
			handleNextJobPost()
			if (
				dataMe.me.matches.find(
					(match: any) =>
						match.id === data.applyToJobPosting.recruiter.id
				)
			) {
				handleOpenMatchCongratulation()
			}
		},
		onError: (error) => {
			handleNextJobPost()
		},
	})

	const [
		rejectJobPosting,
		{ loading: loadingRejectJobPosting, data: dataRejectJobPosting },
	] = useMutation(RejectJobPostingMutation, {
		onCompleted: (data) => {
			handleNextJobPost()
		},
		onError: (error) => {
			toast.error(error.message)
			handleNextJobPost()
		},
	})

	const handleApplyToJobPosting = (jobPostingId: string) => {
		getMe()
		applyToJobPosting({
			variables: {
				jobPostingId,
			},
		})
	}

	const handleRejectJobPosting = (jobPostingId: string) => {
		rejectJobPosting({
			variables: {
				jobPostingId,
			},
		})
	}

	const [currentJobPostIndex, setCurrentJobPostIndex] = React.useState(0)
	const [currentJobPost, setCurrentJobPost] = React.useState<any>(null)
	const [showMatchCongratulation, setShowMatchCongratulation] =
		React.useState(false)

	const handleCloseMatchCongratulation = () => {
		setShowMatchCongratulation(false)
	}

	const handleOpenMatchCongratulation = () => {
		setShowMatchCongratulation(true)
	}

	const handleNextJobPost = () => {
		setCurrentJobPostIndex(currentJobPostIndex + 1)
	}

	const [show, setShow] = React.useState(false)
	const handleClose = () => setShow(false)
	const handleCompanyModelShow = () => setShow(true)

	useEffect(() => {
		getJobPostings()
	}, [])

	useEffect(() => {
		if (dataJobPostings && dataJobPostings.jobPostings) {
			if (currentJobPostIndex < dataJobPostings.jobPostings.length) {
				const post = dataJobPostings.jobPostings[currentJobPostIndex]
				if (post) {
					setCurrentJobPost(post)
				} else {
					handleNextJobPost()
				}
			}
		}
	}, [dataJobPostings, currentJobPostIndex])

	return (
		<div>
			<section className='center min-vh-md-90 mt-md-0 mt-6'>
				{loadingJobPostings ? (
					<SkeletonCard />
				) : (!dataJobPostings && !currentJobPost) ||
				  currentJobPostIndex ===
						dataJobPostings?.jobPostings.length ? (
					<AllCaughtUp />
				) : (
					<CompanyCard
						currentJobPost={currentJobPost}
						handleNextJobPost={handleNextJobPost}
						handleApplyToJobPosting={handleApplyToJobPosting}
						handleRejectJobPosting={handleRejectJobPosting}
						handleCompanyModelShow={handleCompanyModelShow}
						loadingRejectJobPosting={loadingRejectJobPosting}
						loadingApplyToJobPosting={loadingApplyToJobPosting}
					/>
				)}
			</section>
			<MatchCongratulationModel
				show={showMatchCongratulation}
				handleClose={handleCloseMatchCongratulation}
			/>
			{currentJobPost && (
				<CompanyModel
					handleClose={handleClose}
					show={show}
					currentCompany={currentJobPost?.company}
				/>
			)}
		</div>
	)
}

export default UserHome
