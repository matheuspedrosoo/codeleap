import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ButtonCustom } from '../../../../components/Button'
import InputField from '../../../../components/InputField'
import { useAuth } from '../../../../context/AuthContext'
import { createPost, getPosts } from '../../../../redux/postsSlice'
import { AppDispatch } from '../../../../redux/store'

import { FormInsertContainer } from './styles'

interface IPostProps {
	title: string
	content: string
}

export function FormNewPost() {
	const { user } = useAuth()
	const [post, setPost] = useState<IPostProps>({
		title: '',
		content: ''
	})
	const dispatch = useDispatch<AppDispatch>()

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setPost((prevPost) => ({ ...prevPost, [name]: value }))
	}

	const hadleCreateNewPost = () => {
		const newPost = {
			username: user,
			title: post.title,
			content: post.content
		}

		dispatch(createPost(newPost))
			.then(() => {
				dispatch(getPosts())
				setPost({ title: '', content: '' })
			})
			.catch((error) => {
				console.error('Error creating new post: ', error)
			})
	}

	return (
		<FormInsertContainer>
			<span className='title'>What’s on your mind?</span>

			<div>
				<InputField
					id='title'
					name='title'
					type='text'
					placeholder='Hello world'
					value={post.title}
					onChange={handleInputChange}
					label='Title'
				/>
				<InputField
					id='content'
					name='content'
					type='textarea'
					placeholder='Content here'
					value={post.content}
					onChange={handleInputChange}
					label='Content'
				/>
			</div>

			<ButtonCustom
				title='create'
				disabled={!post.title || !post.content}
				onClick={() => hadleCreateNewPost()}
			/>
		</FormInsertContainer>
	)
}
