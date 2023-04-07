import { ButtonCustom } from '../../components/Button'

import { Container } from './styles'

export function Signup() {
	return (
		<Container>
			<h2 className='title'>Welcome to CodeLeap network!</h2>
			<span>Please enter your username</span>
			<input
				type='text'
				placeholder='John doe'
			/>
			<ButtonCustom title='enter' />
		</Container>
	)
}
