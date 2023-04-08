import { FormNewPost } from './components/FormNewPost'
import { PostItem } from './components/PostItem'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Container, Header, PostList } from './styles'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/postsSlice'
import { AppDispatch } from '../../redux/store'
import { RootState } from '../../redux/store'

interface Post {
	id: number
	username: string
	created_datetime: Date
	title: string
	content: string
}

export default function Posts() {
	const { logout } = useAuth()
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const dataPosts = useSelector((state: RootState) => state.posts.posts)
	// @ts-ignore
	const posts = dataPosts.results

	useEffect(() => {
		dispatch(getPosts())
	}, [dispatch])

	const hadleLogout = () => {
		logout()
		navigate('/')
	}

	return (
		<Container>
			<Header>
				<span>CodeLeap Network</span>
				<button
					className='logout'
					onClick={() => hadleLogout()}
				>
					logout
				</button>
			</Header>

			<FormNewPost />

			{posts &&
				posts.map((post: Post) => (
					<PostList key={post.id}>
						<PostItem post={post} />
					</PostList>
				))}
		</Container>
	)
}
