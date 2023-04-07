import styled from 'styled-components'

export const PostHeader = styled.div`
	height: 7rem;
	position: absolute;
	inset: 0;
	padding: 2.4rem;
	background-color: ${({ theme }) => theme.colors.blue};
	color: ${({ theme }) => theme.colors.white};

	display: flex;
	align-items: center;
	justify-content: space-between;

	.icons {
		display: flex;
		align-items: center;
		justify-content: center;

		button {
			border: none;
			background: none;
			outline: none;
			cursor: pointer;
			transition: filter 1s;

			img {
				width: 31px;
				height: 31px;
			}

			.delete {
				margin-right: 2.4rem;
			}

			:hover {
				filter: brightness(0.9);
			}

			@media (max-width: 768px) {
				.delete {
					margin-right: 1.4rem;
				}
			}
		}
	}

	@media (max-width: 768px) {
		padding: 1rem;
	}
`
export const PostContent = styled.div`
	margin-top: 6.4rem;

	.text {
		margin-top: 1.6rem;
	}

	@media (max-width: 768px) {
		.text {
			font-size: 1.6rem;
		}
	}
`
export const PostContentHeader = styled.div`
	display: flex;
	justify-content: space-between;

	.user,
	.time {
		font-size: 1.8rem;
		color: ${({ theme }) => theme.colors.gray};
	}

	.user {
		font-weight: 700;
	}

	.time {
		font-weight: 400;
	}
`
