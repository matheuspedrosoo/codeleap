import { Container } from './styles'

interface InputFieldProps {
	id: string
	name: string
	type: string
	placeholder?: string
	value: string
	label?: string
	onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const InputField = ({ id, name, type, placeholder, value, onChange, label }: InputFieldProps) => {
	const isTextArea = type === 'textarea'

	return (
		<Container>
			<label htmlFor={id}>{label}</label>
			{isTextArea ? (
				<textarea
					id={id}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
			) : (
				<input
					id={id}
					name={name}
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					autoFocus
				/>
			)}
		</Container>
	)
}

export default InputField
