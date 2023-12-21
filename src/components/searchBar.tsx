"use client"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function SearchBar() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative w-full flex justify-center"
    >
      <input
        type="search"
        placeholder="Search..."
        className="rounded-full w-11/12 h-14 pl-8 pr-4 py-2 focus:outline-none focus:shadow-outline transition-shadow duration-500 border border-gray-300 hover:shadow-md hover:shadow-primary"
      />

      <button type="submit" style={{ marginLeft: -40 }} className="text-text">
        <FontAwesomeIcon icon={faSearch} className="h-8" />
      </button>
    </form>
  );
}
