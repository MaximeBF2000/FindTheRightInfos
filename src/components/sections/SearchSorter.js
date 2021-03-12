import React from "react"

function SearchSorter() {
	return (
		<div className="searchResults">
			<div className="searchSort__container">
				<div className="numberOfResults">About 135 results</div>
				<div className="sorter">
					<span>Sort by</span>
					<select>
						<option value="relevance">Relevance</option>
						<option value="relevance">Latest</option>
						<option value="relevance">Oldest</option>
						<option value="relevance">Cheapest</option>
						<option value="relevance">Most expensive</option>
					</select>
				</div>
			</div>
		</div>
	)
}

export default SearchSorter
