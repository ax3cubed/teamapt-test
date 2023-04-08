import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export const SearchInput = ({ setSearch, search }) => {
  return (
    <div className="relative">
      <input
        value={search}
        className="border border-[#dbdddf] rounded-md h-10 pl-10 pr-3"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <MagnifyingGlassIcon className="w-6 h-6 absolute top-2 left-2 text-gray-400" />
    </div>
  );
};
