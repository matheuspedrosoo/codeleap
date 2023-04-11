import { ButtonCustom } from '../../../../components/Button'
import { PaginationContainer } from './styles'

interface IPaginationProps {
	currentPageStartIndex: number
	currentPageEndIndex: number
	totalCount: number
	currentPage: number
	totalPages: number
	handleFirst: () => void
	handlePrev: () => void
	handleNext: () => void
	handleLast: () => void
	dataPosts: any
}

export function Pagination({
	currentPageStartIndex,
	currentPageEndIndex,
	totalCount,
	handleFirst,
	handlePrev,
	handleNext,
	handleLast,
	dataPosts,
	currentPage,
	totalPages
}: IPaginationProps) {
	return (
		<PaginationContainer>
			<div className='results'>
				Showing {currentPageStartIndex}-{currentPageEndIndex} of {totalCount} results
			</div>

			<div>
				<ButtonCustom
					title='First'
					onClick={handleFirst}
					disabled={!dataPosts?.previous}
				/>

				<ButtonCustom
					title='Previous'
					onClick={handlePrev}
					disabled={!dataPosts?.previous}
				/>

				<div className='count'>
					{currentPage} / {totalPages}
				</div>

				<ButtonCustom
					title='Next'
					onClick={handleNext}
					disabled={!dataPosts?.next}
				/>

				<ButtonCustom
					title='Last'
					onClick={handleLast}
					disabled={!dataPosts?.next}
				/>
			</div>
		</PaginationContainer>
	)
}
