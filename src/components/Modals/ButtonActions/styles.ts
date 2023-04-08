import styled from 'styled-components'

interface IButtonProps {
	name?: 'cancel' | 'delete' | 'save'
}

export const Container = styled.div`
	margin-top: 4rem;
	width: fit-content;
	height: fit-content;
	margin-left: auto;
	display: flex;
	gap: 1.6rem;
`

export const Button = styled.button<IButtonProps>`
	background: ${({ theme, name }) =>
		name === 'cancel'
			? theme.colors.white
			: name === 'delete'
			? theme.colors.danger
			: name === 'save'
			? theme.colors.success
			: theme.colors.white};

	border: ${({ theme, name }) => (name === 'cancel' ? `1px solid ${theme.colors.gray60}` : 'none')};
	color: ${({ theme, name }) => (name === 'cancel' ? `${theme.colors.black}` : `${theme.colors.white}`)};

	text-transform: capitalize;
	font-size: 1.6rem;
	font-weight: 700;
	outline: none;
	border-radius: 0.8rem;
	padding: 0.6rem 2.8rem;
	transition: filter 0.5s;
	cursor: pointer;

	:hover:not(:disabled) {
		filter: brightness(0.9);
	}

	:disabled {
		cursor: not-allowed;
		background: ${({ theme }) => theme.colors.gray50};
	}
`
