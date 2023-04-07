import { ButtonCustom } from '../../../../components/Button'

import { FormInsertContainer } from './styles'

export function FormNewPost() {
	return (
		<FormInsertContainer>
			<span className='title'>What’s on your mind?</span>

			<label htmlFor='title'>Title</label>
			<input
				id='title'
				type='text'
				placeholder='Hello world'
			/>

			<label htmlFor='content'>Content</label>
			<textarea
				id='content'
				placeholder='Content here'
			/>

			<ButtonCustom title='create' />
		</FormInsertContainer>
	)
}
