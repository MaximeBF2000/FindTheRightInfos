import React from "react"
import { Button } from "../index"

function SearchInput({ searchQuery, setSearchQuery }) {
	return (
		<div className="search__container">
			<div className="relativeContainer">
				<input
					type="text"
					className="search__input"
					placeholder="Find a course..."
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>
			</div>
			<div className="filter__container">
				<div className="relativeContainer">
					<Button small rounded className="filtrerBtn">
						Categories
					</Button>
				</div>
				<div className="relativeContainer">
					<Button small rounded className="filtrerBtn">
						Dates
					</Button>
				</div>
				<div className="relativeContainer">
					<Button small rounded className="filtrerBtn">
						Reviews
					</Button>
				</div>
				<div className="relativeContainer">
					<Button small rounded className="filtrerBtn">
						Price
					</Button>
				</div>
			</div>
		</div>
	)
}

export default SearchInput
