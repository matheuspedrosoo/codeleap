import { AnyAction, createAsyncThunk, createSlice, PayloadAction, ThunkDispatch } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from './store'
import { Post, PostState } from '../Interfaces/IPost'
import api from '../services/api'

const initialState: PostState = {
	posts: []
}

export const getPosts = createAsyncThunk('posts/getPosts', async (_, { rejectWithValue }) => {
	try {
		const response = await api.get<Post[]>('/careers/')
		return response.data
	} catch (error) {
		return rejectWithValue('Error getting posts')
	}
})

export const getMorePosts = createAsyncThunk('posts/getMorePosts', async (url: string, { rejectWithValue }) => {
	try {
		const response = await api.get<Post[]>(`${url}`)
		return response.data
	} catch (error) {
		return rejectWithValue('Error getting posts')
	}
})

export const createPost = createAsyncThunk('posts/createPost', async (post: Post, { rejectWithValue }) => {
	try {
		const response = await api.post('/careers/', post)
		return response.data
	} catch (error) {
		return rejectWithValue('Error creating new post')
	}
})

export const deletePost = createAsyncThunk('posts/deletePost', async (postId: number, { rejectWithValue }) => {
	try {
		await api.delete(`/careers/${postId}/`)
		return postId
	} catch (error) {
		return rejectWithValue('Error deleting post')
	}
})

export const updatePost = createAsyncThunk(
	'posts/updatePost',
	async (
		{ id, title, content, created_datetime }: { id: number; title: string; content: string; created_datetime: Date },
		{ rejectWithValue }
	) => {
		try {
			const response = await api.patch(`/careers/${id}/`, { title, content, created_datetime })
			return response.data
		} catch (error) {
			return rejectWithValue('Error updating post')
		}
	}
)

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getPosts.fulfilled, (state, action) => {
			state.posts = action.payload
		})
		builder.addCase(createPost.fulfilled, (state, action) => {
			state.posts = action.payload
		})
		builder.addCase(deletePost.fulfilled, (state, action) => {
			if (Array.isArray(state.posts)) {
				state.posts = state.posts.filter((post) => post.id !== action.payload)
			}
		})
		builder.addCase(updatePost.fulfilled, (state, action) => {
			if (Array.isArray(state.posts)) {
				state.posts = state.posts.map((post) => {
					if (post.id === action.payload.id) {
						return action.payload
					}
					return post
				})
			}
		})
		builder.addCase(getMorePosts.fulfilled, (state, action) => {
			state.posts = action.payload
		})
	}
})

export default postSlice.reducer

export const fetchPosts = () => {
	return (dispatch: AppDispatch) => {
		dispatch(getPosts())
	}
}

export const useFetchPosts = () => {
	const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>()
	useEffect(() => {
		dispatch(getPosts())
	}, [dispatch])
}
