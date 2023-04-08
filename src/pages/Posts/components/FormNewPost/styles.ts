import styled from 'styled-components'

export const FormInsertContainer = styled.div`
	margin: 2.4rem 0;
	width: 75.2rem;
	padding: 2.4rem;
	border-radius: 1.6rem;
	border: 0.1rem solid ${({ theme }) => theme.colors.gray60};
	display: flex;
	flex-direction: column;

	@media (max-width: 768px) {
		width: 95%;
	}
`
