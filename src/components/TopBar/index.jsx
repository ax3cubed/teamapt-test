import React, { useState } from "react";

import { ShoppingCart } from "./ShoppingCart";
import { MessageOverlayIcon } from "./MessageOverlayIcon";
import { SearchInput } from "./SearchInput";


const TopBar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="w-full flex-1 z-[3000000]">
    <div className="flex justify-between items-center my-3 gap-6 px-5">
        <SearchInput search={search} setSearch={setSearch} />
        <ShoppingCart itemCount={4} />
        <MessageOverlayIcon itemCount={8} />
    </div>
  </div>
  
  );
};

export default TopBar;
