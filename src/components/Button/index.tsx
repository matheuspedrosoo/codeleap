import { Button } from './styles'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	title: string
	disabled?: boolean
}

export function ButtonCustom({ title, disabled, ...props }: IButtonProps) {
	return (
		<Button
			{...props}
			disabled={disabled}
		>
			{title}
		</Button>
	)
}
