import { PostContent, PostContentHeader, PostHeader } from './styles'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../redux/store'
import { deletePost, getPosts, updatePost } from '../../../../redux/postsSlice'
import { useState } from 'react'
import ModalDelete from '../../../../components/Modals/ModalDelete'
import ModalEdit from '../../../../components/Modals/ModalEdit'
import InputField from '../../../../components/InputField'
import moment from 'moment'
import { ToastError, ToastSucess } from '../../../../utils/Toast'

interface IPostProps {
	post: {
		id: number
		username: string
		created_datetime: Date
		title: string
		content: string
	}
}
interface IPostEditProps {
	title: string
	content: string
}

export function PostItem({ post }: IPostProps) {
	const dispatch = useDispatch<AppDispatch>()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isModalEditOpen, setIsModalEditOpen] = useState(false)
	const [postEdit, setPostedit] = useState<IPostEditProps>({
		title: '',
		content: ''
	})

	const handleOpenModal = () => {
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	const handleOpenModalEdit = (post: IPostEditProps) => {
		setIsModalEditOpen(true)

		setPostedit(post)
	}

	const handleCloseModalEdit = () => {
		setIsModalEditOpen(false)
	}

	function handleDeletePost(id: number) {
		dispatch(deletePost(id))
			.then(() => {
				dispatch(getPosts())
				ToastSucess('Successfully deleted!')
			})
			.catch((error) => {
				ToastError(`Error delete post: ${error}`)
			})
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target
		setPostedit((prevState) => ({ ...prevState, [name]: value }))
	}

	const hadleSavePostEdit = (id: number) => {
		dispatch(
			updatePost({
				id: id,
				title: postEdit.title,
				content: postEdit.content,
				created_datetime: new Date()
			})
		)
			.then(() => {
				dispatch(getPosts())
				ToastSucess('Successfully edited!')
				setIsModalEditOpen(false)
			})
			.catch((error) => {
				ToastError(`Error updating post: ${error}`)
			})
	}

	return (
		<>
			<PostHeader>
				<span className='title'>{post.title}</span>
				<div className='icons'>
					<button onClick={() => handleOpenModal()}>
						<img
							className='delete'
							src='src/assets/icon_delete.svg'
							alt='Icon Edit'
						/>
					</button>

					<button onClick={() => handleOpenModalEdit(post)}>
						<img
							className='edit'
							src='src/assets/icon_edit.svg'
							alt='Icon Edit'
						/>
					</button>

					{isModalOpen && (
						<ModalDelete
							isModalOpen={isModalOpen}
							onCloseModal={handleCloseModal}
							onDeletePost={() => handleDeletePost(post.id)}
							title='Are you sure you want to delete this item?'
						/>
					)}

					{isModalEditOpen && (
						<ModalEdit
							isModalEditOpen={isModalEditOpen}
							onCloseModalEdit={handleCloseModalEdit}
							onSave={() => hadleSavePostEdit(post.id)}
							title={postEdit.title}
							content={postEdit.content}
						>
							<div>
								<InputField
									id='title'
									name='title'
									type='text'
									placeholder='Hello world'
									value={postEdit.title}
									onChange={handleInputChange}
									label='Title'
								/>
								<InputField
									id='content'
									name='content'
									type='textarea'
									placeholder='Content here'
									value={postEdit.content}
									onChange={handleInputChange}
									label='Content'
								/>
							</div>
						</ModalEdit>
					)}
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
