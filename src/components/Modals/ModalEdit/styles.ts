import styled from 'styled-components'

export const Overlay = styled.div`
	position: fixed;
	inset: 0;
	height: 100vh;
	overflow-y: hidden;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ theme }) => theme.colors.overlay};
`

export const Container = styled.div`
	background: ${({ theme }) => theme.colors.white};
	border: 1px solid ${({ theme }) => theme.colors.gray60};
	border-radius: 1.6rem;
	padding: 2.4rem;
	width: 66rem;

	@media (max-width: 768px) {
		width: 95%;
	}

	.actions {
		margin-top: 4rem;
		width: fit-content;
		height: fit-content;
		margin-left: auto;
		display: flex;
		flex-direction: row;
		gap: 1.6rem;
	}
`
