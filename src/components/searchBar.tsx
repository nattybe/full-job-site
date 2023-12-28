"use client";
import { SearchContext } from "@/context/jobsContext";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

export default function SearchBar() {
  const { searchPhrase, setSearchPhrase, getSearch,searchResult } =
    useContext(SearchContext);
  const router = useRouter();
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await getSearch();
        router.push("/Jobs");
      }}
      className="relative w-full flex justify-center"
    >
      <input
        type="search"
        placeholder="Search..."
        onChange={(e) => {
          setSearchPhrase(e.target.value);
          router;
        }}
        defaultValue={searchPhrase}
        className="rounded-full w-11/12 h-14 pl-8 pr-4 py-2 focus:outline-none focus:shadow-outline transition-shadow duration-500 border border-gray-300 hover:shadow-md hover:shadow-primary"
      />
      <button type="submit" style={{ marginLeft: -40 }} className="text-black">
        <FontAwesomeIcon icon={faSearch} className="h-8" />
      </button>
    </form>
  );
}
