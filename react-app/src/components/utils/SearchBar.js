import React from "react";

import "./SearchBar.css";

import { BsSearch } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";

const SearchBar = ({ input, setInput }) => {
  return (
    <div className="flex_row SearchBar">
      <BsSearch />
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {input && <RiCloseCircleFill onClick={() => setInput("")} />}
    </div>
  );
};

export default SearchBar;
