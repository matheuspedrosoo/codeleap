import { useState } from 'react'
import { ButtonCustom } from '../../components/Button'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { ToastSucess } from '../../utils/Toast'

import { Container } from './styles'

interface ISignupState {
	username: string
}

export default function Signup() {
	const [name, setName] = useState<ISignupState>({
		username: ''
	})
	const navigate = useNavigate()
	const { login } = useAuth()

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName({
			...name,
			username: e.target.value
		})
	}

	const hadleLogin = () => {
		login(name.username)
		navigate('/posts')

		ToastSucess(`Welcome ${name.username}!`)
	}

	return (
		<Container>
			<h2 className='title'>Welcome to CodeLeap network!</h2>
			<span>Please enter your username</span>
			<input
				type='text'
				placeholder='John doe'
				value={name.username}
				onChange={handleInputChange}
			/>
			<ButtonCustom
				title='enter'
				disabled={!name.username}
				onClick={() => hadleLogin()}
			/>
		</Container>
	)
}
