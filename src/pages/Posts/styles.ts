import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
	margin: 0 auto;
	align-self: start;
	width: 80rem;
	background: ${({ theme }) => theme.colors.white};

	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 768px) {
		width: 100%;
	}
`

export const Header = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.blue};
	padding: 2.7rem 3.7rem;

	display: flex;
	justify-content: space-between;

	span {
		font-size: 2.2rem;
		line-height: 2.6rem;
		color: ${({ theme }) => theme.colors.white};
		font-weight: 700;
	}

	.logout {
		border: none;
		outline: none;
		background: none;
		cursor: pointer;
		color: white;
		font-size: 1.6rem;
		text-decoration: underline;
	}
`

const transitionIn = keyframes`
	from {
		transform: translateY(100px);
	}

	to {
		transform: translateY(0);
	}
`

export const PostList = styled.div`
	margin: 2.4rem 0;
	width: 75.2rem;
	height: 316px;
	padding: 2.4rem;
	border-radius: 1.6rem;
	overflow: hidden;
	position: relative;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

	animation: ${transitionIn} 0.3s ease-out;

	@media (max-width: 768px) {
		width: 95%;
		height: fit-content;
	}
`
