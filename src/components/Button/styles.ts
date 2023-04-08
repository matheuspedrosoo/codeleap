import styled from 'styled-components'

export const Button = styled.button`
	margin-top: 16px;
	margin-left: auto;
	width: 11.1rem;
	height: 3.2rem;
	font-size: 1.6rem;
	line-height: 1.9rem;
	text-transform: uppercase;
	border-radius: 0.8rem;
	outline: none;
	border: none;
	background: ${({ theme }) => theme.colors.blue};
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
	transition: filter 0.1s;

	:hover:not(:disabled) {
		filter: brightness(0.9);
	}

	:disabled {
		cursor: not-allowed;
		background: ${({ theme }) => theme.colors.gray50};
	}
`
