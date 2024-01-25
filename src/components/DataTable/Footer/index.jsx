import { ChevronLeft, ChevronRight, ChevronLast, ChevronFirst } from "lucide-react";

const Footer = ({ pagination }) => {
    const { currentPage, pageSize, handleChangePage, handleChangeRowsPerPage, goToFirstPage, goToLastPage, calculateDisplayedRange, totalItems } = pagination;

    const hasNextPage = currentPage * pageSize >= totalItems;
    const hasPrevPage = currentPage === 1;

    return (
        <div className="w-full flex justify-end">
            <div className="flex gap-8">
                <div className='flex items-center gap-4'>
                    <p className="text-sm">Rows per page:</p>
                    <select
                        className="bg-transparent text-sm"
                        value={pageSize}
                        onChange={(e) => handleChangeRowsPerPage(parseInt(e.target.value))}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </select>
                </div>
                <p className="text-sm">{calculateDisplayedRange()}</p>
                <div className='flex items-center gap-2'>
                    <button disabled={hasPrevPage} onClick={() => goToFirstPage()}>
                        <ChevronFirst size={17} strokeWidth={2} className={`${hasPrevPage ? "text-gray-300" : "cursor-pointer text-gray-400 hover:text-gray-600"}`} />
                    </button>
                    <button disabled={hasPrevPage} onClick={() => handleChangePage(currentPage - 1)}>
                        <ChevronLeft size={17} strokeWidth={2} className={`${hasPrevPage ? "text-gray-300" : "cursor-pointer text-gray-400 hover:text-gray-600"}`} />
                    </button>
                    <button disabled={hasNextPage} onClick={() => handleChangePage(currentPage + 1)}>
                        <ChevronRight size={17} strokeWidth={2} className={`${hasNextPage ? "text-gray-300" : "cursor-pointer text-gray-400 hover:text-gray-600"}`} />
                    </button>
                    <button disabled={hasNextPage} onClick={() => goToLastPage()}>
                        <ChevronLast size={17} strokeWidth={2} className={`${hasNextPage ? "text-gray-300" : "cursor-pointer text-gray-400 hover:text-gray-600"}`} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;