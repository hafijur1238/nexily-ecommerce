import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationControlsProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const PaginationControls = ({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationControlsProps) => {
	// Generate array of page numbers to display
	const getPageNumbers = () => {
		const pages = [];

		// Always include first page
		pages.push(1);

		// Add pages around current page
		for (
			let i = Math.max(2, currentPage - 1);
			i <= Math.min(totalPages - 1, currentPage + 1);
			i++
		) {
			pages.push(i);
		}

		// Always include last page if there are more than 1 page
		if (totalPages > 1) {
			pages.push(totalPages);
		}

		// Add ellipsis indicators
		return pages.reduce((result: (number | string)[], page, index, array) => {
			result.push(page);

			// Add ellipsis if there's a gap
			if (index < array.length - 1 && array[index + 1] - page > 1) {
				result.push("...");
			}

			return result;
		}, []);
	};

	const pageNumbers = getPageNumbers();

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
						className={
							currentPage === 1
								? "pointer-events-none opacity-50"
								: "cursor-pointer"
						}
					/>
				</PaginationItem>

				{pageNumbers.map((page, index) =>
					page === "..." ? (
						<PaginationItem key={`ellipsis-${index}`}>
							<span className="px-4 py-2">...</span>
						</PaginationItem>
					) : (
						<PaginationItem key={`page-${page}`}>
							<PaginationLink
								isActive={currentPage === page}
								onClick={() => typeof page === "number" && onPageChange(page)}
							>
								{page}
							</PaginationLink>
						</PaginationItem>
					)
				)}

				<PaginationItem>
					<PaginationNext
						onClick={() =>
							currentPage < totalPages && onPageChange(currentPage + 1)
						}
						className={
							currentPage === totalPages
								? "pointer-events-none opacity-50"
								: "cursor-pointer"
						}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};

export default PaginationControls;
