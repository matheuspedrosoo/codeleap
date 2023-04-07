import { Button } from './styles'

interface IButtonProps {
	title: string
}

export function ButtonCustom({ title }: IButtonProps) {
	return <Button>{title}</Button>
}
