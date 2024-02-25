import React, { useState } from "react";
import VoiceSearch from "./VoiceSearch";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <div>
      <VoiceSearch onSearch={handleSearch} />
      {/* <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      /> */}
    </div>
  );
};

export default SearchPage;
