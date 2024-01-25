import { useState, useMemo } from 'react';

const usePagination = (data) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const totalItems = data?.length;

  const paginatedData = data?.slice((currentPage - 1) * pageSize, currentPage * pageSize) || [];

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (newRowsPerPage) => {
    setPageSize(newRowsPerPage);
    setCurrentPage(1);
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    const lastPage = Math.ceil(totalItems / pageSize);
    setCurrentPage(lastPage);
  };

  const calculateDisplayedRange = (rowSeparator) => {
    const startItem = currentPage === 1 && data.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(startItem + pageSize - 1, totalItems);
    return `${startItem}-${endItem} ${rowSeparator || "of"} ${totalItems}`;
  };

  return {
    paginatedData,
    currentPage,
    pageSize,
    totalItems,
    handleChangePage,
    handleChangeRowsPerPage,
    goToFirstPage,
    goToLastPage,
    calculateDisplayedRange,
  };
};

export default usePagination;