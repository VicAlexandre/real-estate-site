import React from "react";

const ViewProperty = () => {
  return (
    <div className="mx-5 flex justify-between">
      <a
        href=""
        className="px-4 py-2 bg-green-500 rounded-full text-white 
        hover:bg-green-700 align-middle font-semibold"
      >
        View Property
      </a>
      <a href="#" className="flex text-green-500 hover:text-green-600">
        <h3 className="font-bold my-auto pr-[4px]">QR Code</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 my-auto inline"
          fill="none"
          viewBox="0 0 24 24"
          stroke="green"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
          />
        </svg>
      </a>
    </div>
  );
};

export default ViewProperty;
