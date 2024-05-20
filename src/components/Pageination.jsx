import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pageination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className=" w-full flex justify-center items-center border-2 fixed bottom-0 bg-white">
      <div className="flex justify-between w-11/12 max-w-[650px] py-2">
      <div className="flex gap-x-2">

        {page > 1 && (
          <button 
          className="rounded-md px-4 py-1 border-2"
          onClick={() => handlePageChange(page - 1)}>Previous</button>
        )}

        {page < totalPages && (
          <button 
          className="rounded-md px-4 py-1 border"
          onClick={() => handlePageChange(page + 1)}>Next</button>
        )}
      </div>

        <p className=" font-bold text-sm text-center">
          page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pageination;
