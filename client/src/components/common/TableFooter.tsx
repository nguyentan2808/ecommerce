import { IconButton, Input, Select } from "@chakra-ui/react";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface ITableFooterProps {
  count: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

const TableFooter: React.FC<ITableFooterProps> = ({
  count,
  currentPage,
  setCurrentPage,
  limit,
  setLimit,
}) => {
  const handleChangePage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    console.log(value);
    if (value > 0 && value <= count / limit) {
      setCurrentPage(value);
    }
  };

  return (
    <div className="flex gap-2 justify-end items-center">
      <div className="flex items-center gap-2">
        Rows per page:{" "}
        <Select
          w={16}
          size="sm"
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          {[5, 10, 15, 20].map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </div>

      <div>
        From <b>{(currentPage - 1) * limit + 1}</b> -{" "}
        <b>{count > currentPage * limit ? currentPage * limit : count}</b> of{" "}
        {count} total
      </div>

      <IconButton
        aria-label="Previous page"
        variant="ghost"
        colorScheme="gray"
        icon={<BsChevronLeft className="text-md text-black" />}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      />

      <IconButton
        aria-label="Next page"
        variant="ghost"
        colorScheme="gray"
        icon={<BsChevronRight className="text-md text-black" />}
        disabled={currentPage * limit >= count}
        onClick={() => setCurrentPage(currentPage + 1)}
      />
    </div>
  );
};

export default TableFooter;
