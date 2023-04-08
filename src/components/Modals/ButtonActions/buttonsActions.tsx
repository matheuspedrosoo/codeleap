import { Button, Container } from './styles'

interface IButtonActionProps {
	onCloseModal?: () => void
	onDeletePost?: () => void
	onCloseModalEdit?: () => void
	onSave?: () => void
	title?: string
	content?: string
	type: {
		button1: 'cancel'
		button2: 'delete' | 'save'
	}
}

export function ButtonsActions({
	type,
	onCloseModal,
	onDeletePost,
	onCloseModalEdit,
	onSave,
	title,
	content
}: IButtonActionProps) {
	return (
		<Container>
			{type.button1 === 'cancel' && (
				<Button
					name='cancel'
					onClick={onCloseModal || onCloseModalEdit}
				>
					cancel
				</Button>
			)}
			{type.button2 === 'delete' && (
				<Button
					name='delete'
					onClick={onDeletePost}
				>
					delete
				</Button>
			)}

			{type.button2 === 'save' && (
				<Button
					name='save'
					onClick={onSave}
					disabled={!title || !content}
				>
					save
				</Button>
			)}
		</Container>
	)
}
