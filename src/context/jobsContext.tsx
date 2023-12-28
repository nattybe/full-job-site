"use client";
import { createContext, useEffect, useState } from "react";
import { fetcher } from "@/lib/fetcher";
import getFromDB from "@/lib/getFromDB";
const SearchContext = createContext({});

const SearchProvider = ({ children }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [searchResult, setSearchResult] = useState([]);


  const getSearch = async () => {
    // console.log("get Search");
    const data = await getFromDB(searchPhrase);
    setSearchResult(data);    
  };
  return (
    <SearchContext.Provider
      value={{
        getSearch,
        searchPhrase,
        setSearchPhrase,
        searchResult,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };
