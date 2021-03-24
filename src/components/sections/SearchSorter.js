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
						<option value="bestreviewed">Best reviewed</option>
						<option value="latest">Latest</option>
						<option value="oldest">Oldest</option>
						<option value="cheapest">Cheapest</option>
						<option value="mostexpensive">Most expensive</option>
					</select>
				</div>
			</div>
		</div>
	)
}

export default SearchSorter
