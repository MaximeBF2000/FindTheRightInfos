import React, { useState, useMemo } from "react"
import { SearchInput, SearchSorter, SearchResults } from "../index"

function Search() {
  const [searchQuery, setSearchQuery] =  useState("")
  const searchQueryIsEmpty = useMemo(() => searchQuery.length === 0, [searchQuery])

	return (
		<div className={`searchPage ${!searchQuery && "emptySearch"}`}>
			<SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {
        !searchQueryIsEmpty && (
          <div className="sizeContainer">
            <SearchSorter />
            <SearchResults />
          </div>
        )
      }
		</div>
	)
}

export default Search
