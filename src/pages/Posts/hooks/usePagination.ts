import { getMorePosts } from '../../../redux/postsSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { useState } from 'react'
import api from '../../../services/api'
import { useFetchPosts } from './useFetchPosts'

export function usePagination() {
	const { dataPosts } = useFetchPosts()
	const dispatch = useDispatch<AppDispatch>()
	const [currentPage, setCurrentPage] = useState(1)
	const POSTS_PER_PAGE = 10
	const totalPages = Math.ceil(dataPosts?.count / POSTS_PER_PAGE)
	const totalCount = dataPosts?.count || 0
	const currentPageStartIndex = (currentPage - 1) * POSTS_PER_PAGE + 1
	const currentPageEndIndex = Math.min(currentPage * POSTS_PER_PAGE, totalCount)

	const handleNext = async () => {
		if (dataPosts?.next) {
			await dispatch(getMorePosts(dataPosts?.next))
			setCurrentPage((prevPage) => prevPage + 1)
		}
	}

	const handlePrev = async () => {
		if (dataPosts?.previous) {
			dispatch(getMorePosts(dataPosts?.previous))
			setCurrentPage((prevPage) => prevPage - 1)
		}
	}

	const handleFirst = async () => {
		const firstPage = 1
		const firstPageLink = `${api.defaults.baseURL}/careers/?limit=${POSTS_PER_PAGE}&offset=0`
		await dispatch(getMorePosts(firstPageLink))
		setCurrentPage(firstPage)
	}

	const handleLast = async () => {
		const lastPage = Math.ceil(dataPosts?.count / POSTS_PER_PAGE)
		const lastPageStartIndex = (lastPage - 1) * POSTS_PER_PAGE
		const lastPageLink = `${api.defaults.baseURL}/careers/?limit=${POSTS_PER_PAGE}&offset=${lastPageStartIndex}`
		await dispatch(getMorePosts(lastPageLink))
		setCurrentPage(lastPage)
	}

	return {
		currentPageStartIndex,
		currentPageEndIndex,
		totalCount,
		dataPosts,
		handleFirst,
		handlePrev,
		currentPage,
		totalPages,
		handleNext,
		handleLast
	}
}
