import styled from 'styled-components'

export const PaginationContainer = styled.div`
	margin-bottom: 2.4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2.4rem;

	.results {
		margin-top: 2.4rem;
	}

	> div {
		font-size: 1.6rem;
		display: flex;
		gap: 1.4rem;

		.count {
			margin-top: 1.6rem;
			display: flex;
			align-items: center;
			font-size: 1.6rem;
		}
	}

	@media (max-width: 500px) {
		gap: 0.4rem;

		.results {
			margin-top: 0;
			display: flex;
		}

		> div {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto;
			gap: 0.4rem;
			align-items: center;

			.count {
				order: 3;
				grid-column: span 2;
				justify-content: center;
			}
		}
	}
`
