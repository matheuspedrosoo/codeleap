import { PostContent, PostContentHeader, PostHeader } from './styles'
import moment from 'moment'

interface IPostProps {
	post: {
		id: number
		username: string
		created_datetime: string
		title: string
		content: string
	}
}

export function PostItem({ post }: IPostProps) {
	return (
		<>
			<PostHeader>
				<span className='title'>{post.title}</span>
				<div className='icons'>
					<button>
						<img
							className='delete'
							src='src/assets/icon_delete.svg'
							alt='Icon Edit'
						/>
					</button>

					<button>
						<img
							className='edit'
							src='src/assets/icon_edit.svg'
							alt='Icon Edit'
						/>
					</button>
				</div>
			</PostHeader>

			<PostContent>
				<PostContentHeader>
					<span className='user'>@{post.username}</span>
					<span className='time'>{moment(post.created_datetime).fromNow()}</span>
				</PostContentHeader>

				<div className='text'>{post.content}</div>
			</PostContent>
		</>
	)
}
