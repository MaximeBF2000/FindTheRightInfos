import React, { useState } from "react"
import { SearchInput, SearchSorter, SearchResults } from "../index"

function Search() {
  const [searchQuery, setSearchQuery] =  useState("")

	return (
		<div className={`searchPage ${!searchQuery && "emptySearch"}`}>
			<SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {
        searchQuery && (
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
