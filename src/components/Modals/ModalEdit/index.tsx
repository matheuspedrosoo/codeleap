import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { IModalEditProps } from '../../../Interfaces/IModal'
import { ButtonsActions } from '../ButtonActions/buttonsActions'
import { Container, Overlay } from './styles'

const ModalEdit = ({ children, onCloseModalEdit, title, content, onSave }: IModalEditProps) => {
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
					<span className='title'>Edit item</span>

					{children}

					<ButtonsActions
						onCloseModalEdit={onCloseModalEdit}
						onSave={onSave}
						type={{ button1: 'cancel', button2: 'save' }}
						title={title}
						content={content}
					/>
				</Container>
			</Overlay>
		</>,
		modalRef.current
	)
}

export default ModalEdit
