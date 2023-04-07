import styled from 'styled-components'

export const Container = styled.div`
	width: 50rem;
	background: ${({ theme }) => theme.colors.white};
	border: 0.1rem solid ${({ theme }) => theme.colors.gray50};
	border-radius: 1.6rem;
	padding: 2.4rem;

	display: flex;
	flex-direction: column;

	span {
		margin-top: 2.4rem;
		font-size: 1.6rem;
		font-weight: 400;
	}

	input {
		margin-top: 0.8rem;
		height: 3.2rem;
		border: 0.1rem solid ${({ theme }) => theme.colors.gray};
		border-radius: 0.8rem;
		padding: 8px 11.2px;
		font-size: 1.4rem;
		line-height: 1.6rem;
		outline: none;

		::placeholder {
			color: ${({ theme }) => theme.colors.gray50};
		}
	}

	@media (max-width: 552px) {
		width: 100%;
		height: 100vh;
		justify-content: center;

		h2 {
			text-align: center;
		}

		span {
			font-size: 1.4rem;
			align-self: start;
		}

		button {
			width: 100%;
		}
	}
`
