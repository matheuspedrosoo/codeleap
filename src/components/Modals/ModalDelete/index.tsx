import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ButtonsActions } from '../ButtonActions/buttonsActions'
import { Container, Overlay } from './styles'

interface IModalProps {
	children?: React.ReactNode
	title: string
	isModalOpen: boolean
	onCloseModal: () => void
	onDeletePost: () => void
}

const ModalDelete = ({ children, isModalOpen, onCloseModal, onDeletePost, title }: IModalProps) => {
	const modalRef = useRef(document.createElement('div'))
	const modalRoot = document.getElementById('modal') || document.body

	useEffect(() => {
		modalRoot.appendChild(modalRef.current)

		return () => {
			modalRoot.removeChild(modalRef.current)
		}
	}, [modalRoot])

	return createPortal(
		<>
			<Overlay>
				<Container>
					<span className='title'>{title}</span>

					<ButtonsActions
						onCloseModal={onCloseModal}
						onDeletePost={onDeletePost}
						type={{ button1: 'cancel', button2: 'delete' }}
					/>
				</Container>
			</Overlay>
		</>,
		modalRef.current
	)
}

export default ModalDelete
