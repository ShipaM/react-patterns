import React, { useState } from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  render?: (data: {
    currentPage: number;
    totalPages: number;
    goToPage: (page: number) => void;
  }) => React.ReactNode;
}

export const PaginationChild: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  render,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (render) {
    return render({ currentPage, totalPages, goToPage });
  }

  return (
    <div>
      <p>
        Страница {currentPage} из {totalPages}
      </p>
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Назад
      </button>
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Вперёд
      </button>
    </div>
  );
};
