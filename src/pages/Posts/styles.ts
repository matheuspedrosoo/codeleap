import styled from 'styled-components'

export const Container = styled.div`
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

	span {
		font-size: 2.2rem;
		line-height: 2.6rem;
		color: ${({ theme }) => theme.colors.white};
		font-weight: 700;
	}
`

export const PostList = styled.div`
	margin: 2.4rem 0;
	width: 75.2rem;
	height: 316px;
	padding: 2.4rem;
	border-radius: 1.6rem;
	border: 0.1rem solid ${({ theme }) => theme.colors.gray60};
	overflow: hidden;
	position: relative;

	@media (max-width: 768px) {
		width: 95%;
		height: fit-content;
	}
`
