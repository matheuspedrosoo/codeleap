export interface IModalEditProps {
	children?: React.ReactNode
	title: string
	content: string
	isModalEditOpen: boolean
	onCloseModalEdit: () => void
	onSave: () => void
}

export interface IModalDeleteProps {
	children?: React.ReactNode
	title: string
	isModalOpen: boolean
	onCloseModal: () => void
	onDeletePost: () => void
}
