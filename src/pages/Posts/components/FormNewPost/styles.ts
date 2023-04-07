import styled from 'styled-components'

export const FormInsertContainer = styled.div`
	margin: 2.4rem 0;
	width: 75.2rem;
	padding: 2.4rem;
	border-radius: 1.6rem;
	border: 0.1rem solid ${({ theme }) => theme.colors.gray60};

	display: flex;
	flex-direction: column;

	label {
		margin-top: 2.4rem;
		font-size: 1.6rem;
		font-weight: 400;
		cursor: pointer;
		color: ${({ theme }) => theme.colors.black};
	}

	input,
	textarea {
		margin-top: 8px;
		height: 3.2rem;
		padding: 8px 11.2px;
		font-size: 1.4rem;
		line-height: 1.6rem;
		outline: none;
		border: none;
		border-radius: 0.8rem;
		border: 0.1rem solid ${({ theme }) => theme.colors.gray};

		::placeholder {
			color: ${({ theme }) => theme.colors.gray50};
		}
	}

	textarea {
		height: 7.4rem;
		resize: none;

		::-webkit-scrollbar {
			width: 10px;
		}

		::-webkit-scrollbar-thumb {
			background-color: #888;
			border-radius: 10px;
		}

		::-webkit-scrollbar-track {
			background-color: #f0f0f0;
			border-radius: 10px;
		}

		::-webkit-scrollbar-corner {
			background-color: #f0f0f0;
		}
	}

	@media (max-width: 768px) {
		width: 95%;
	}
`
