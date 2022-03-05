import { IconButton, Input } from "@chakra-ui/react";
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
      <span>
        From <b>{(currentPage - 1) * limit + 1}</b> to{" "}
        <b>{currentPage * limit}</b> of page{" "}
      </span>
      <Input
        type="number"
        w={12}
        size="sm"
        p={1}
        value={currentPage}
        onChange={handleChangePage}
      />

      <IconButton
        aria-label="Search database"
        variant="ghost"
        icon={<BsChevronLeft className="text-md text-black" />}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      />

      <IconButton
        aria-label="Search database"
        variant="ghost"
        icon={<BsChevronRight className="text-md text-black" />}
        disabled={currentPage * limit >= count}
        onClick={() => setCurrentPage(currentPage + 1)}
      />
    </div>
  );
};

export default TableFooter;
