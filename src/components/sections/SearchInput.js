import React, { useState } from "react"
import { Button, SimplePopup } from "../index"
import { useToggle } from "../../utils/hooks"

function SearchInput({ searchQuery, setSearchQuery }) {
  const [categoryPopup, toggleCategoryPopup] = useToggle()
  const [datePopup, toggleDatePopup] = useToggle()
  const [reviewsPopup, toggleReviewsPopup] = useToggle()
  const [pricePopup, togglePricePopup] = useToggle()

  const [categoryInput, setCategoryInput] = useState("")
  const [categories, setCategories] = useState([])

  const [reviewsNote, setReviewsNote] = useState(3)
  const [reviewsNumber, setReviewsNumber] = useState(50)

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
					<Button small rounded className="filtrerBtn" onClick={toggleCategoryPopup}>
						Categories
					</Button>
          <SimplePopup open={categoryPopup}>
            <div className="popup popup--category">
              <form className="relativeContainer" onSubmit={e => {
                e.preventDefault()
                if(categories.some(el => el === categoryInput)) return
                setCategories(ps => [categoryInput, ...ps])
                setCategoryInput("")
              }}>
                <input 
                  type="text" 
                  className="input"
                  placeholder="Enter categories here..."
                  value={categoryInput}
                  onChange={e => setCategoryInput(e.target.value)}
                />
                <Button 
                  rounded small 
                  className="inputBtn"
                  type="submit"
                >
                  Add
                </Button>
              </form>
              <div className="categories">
                {categories.length > 0 ? categories.map((category, i) => (
                  <span className="category" key={i} onClick={() => {
                    setCategories(ps => ps.filter(el => el !== category))
                  }}>
                    {category}
                  </span>
                )) : (
                  <span className="NoCategories">No categories yet</span>
                )}
              </div>
            </div>
          </SimplePopup>
				</div>
				<div className="relativeContainer">
					<Button small rounded className="filtrerBtn" onClick={toggleDatePopup}>
						Dates
					</Button>
          <SimplePopup open={datePopup}>
            <div className="popup popup--date">
              From <span>2017</span> To <span>Now</span>
            </div>
          </SimplePopup>
				</div>
				<div className="relativeContainer">
					<Button small rounded className="filtrerBtn" onClick={toggleReviewsPopup}>
						Reviews
					</Button>
          <SimplePopup open={reviewsPopup}>
            <div className="popup popup--reviews">
              <div className="row">
                <input 
                  type="range" 
                  min={0} 
                  max={5} 
                  step={1}
                  style={{ 
                    background: ("linear-gradient(to right, #ff5733 0%, #ff5733 " + (reviewsNote * 100 / 5) + "%, #D3D3D3 " + (reviewsNote * 100 / 5) + "%, #D3D3D3 100%)")
                  }}
                  value={reviewsNote}
                  onChange={e => setReviewsNote(e.target.value)}
                  className="reviewInput"
                />
                <span className="reviewText">{reviewsNote} / 5</span>
              </div>
              <div className="row">
                <input 
                  type="range" 
                  min={0} 
                  max={999} 
                  step={1}
                  style={{ 
                    background: ("linear-gradient(to right, #ff5733 0%, #ff5733 " + (reviewsNumber * 100 / 999) + "%, #D3D3D3 " + (reviewsNumber * 100 / 999) + "%, #D3D3D3 100%)")
                  }}
                  value={reviewsNumber}
                  onChange={e => setReviewsNumber(e.target.value)}
                  className="reviewInput" 
                />
                <span className="reviewText">
                  {reviewsNumber >= 999 ? "+1000" : reviewsNumber} reviews
                </span>
              </div>
            </div>
          </SimplePopup>
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
