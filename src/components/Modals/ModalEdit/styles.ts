import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`

const sacaleIn = keyframes`
	from {
		transform: scale(0);
	}

	to {
		transform: scale(1);
	}
`

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

	animation: ${fadeIn} 0.3s ease-out;
`

export const Container = styled.div`
	background: ${({ theme }) => theme.colors.white};
	border: 1px solid ${({ theme }) => theme.colors.gray60};
	border-radius: 1.6rem;
	padding: 2.4rem;
	width: 66rem;

	animation: ${sacaleIn} 0.3s ease-out;

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
