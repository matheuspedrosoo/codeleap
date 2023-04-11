import { FormNewPost } from './components/FormNewPost'
import { PostItem } from './components/PostItem'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Container, Header, PostList } from './styles'
import { usePagination } from './hooks/usePagination'
import { Pagination } from './components/Pagination'

export interface Post {
	id: number
	username: string
	created_datetime: Date
	title: string
	content: string
}

export default function Posts() {
	const { logout } = useAuth()
	const navigate = useNavigate()
	const {
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
	} = usePagination()

	const handleLogout = () => {
		logout()
		navigate('/')
	}

	return (
		<Container>
			<Header>
				<span>CodeLeap Network</span>
				<button
					className='logout'
					onClick={() => handleLogout()}
				>
					logout
				</button>
			</Header>

			<FormNewPost />

			{dataPosts?.results &&
				dataPosts?.results.map((post: Post, index: number) => (
					<PostList key={`post-${index}`}>
						<PostItem
							key={`post-${post.id}`}
							post={post}
						/>
					</PostList>
				))}

			<Pagination
				currentPageStartIndex={currentPageStartIndex}
				currentPageEndIndex={currentPageEndIndex}
				totalCount={totalCount}
				handleFirst={handleFirst}
				handlePrev={handlePrev}
				handleNext={handleNext}
				handleLast={handleLast}
				dataPosts={dataPosts}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</Container>
	)
}
