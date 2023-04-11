import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../../redux/postsSlice'
import { AppDispatch, RootState } from '../../../redux/store'

export function useFetchPosts() {
	const dispatch = useDispatch<AppDispatch>()
	const dataPosts = useSelector((state: RootState) => state.posts.posts)

	useEffect(() => {
		dispatch(getPosts())
	}, [dispatch])

	return { dataPosts }
}
