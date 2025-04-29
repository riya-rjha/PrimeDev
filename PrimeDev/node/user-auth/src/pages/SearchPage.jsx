import React, { useState } from "react";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button>Search</button>
      </div>
      <div>
        <h1>Product</h1>
        <div></div>
      </div>
    </div>
  );
};

export default SearchPage;
