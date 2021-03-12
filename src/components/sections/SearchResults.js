import React from 'react'
import imageFrame from "../../assets/image.svg"
import playIcon from "../../assets/playbutton.svg"
import {Link} from "react-router-dom"

function SearchResults() {
  return (
    <div className="searchResults__container">
      {Array(5).fill().map((_, i) => (
        <Link to={`/course/${"courseId"}`} key={i}>
          <div className="searchResult">
            <div className="result__img">
              <img src={imageFrame} alt="" />
            </div>
            <div className="result__text">
              <h3 className="title">Course title</h3>
              <small className="author">by Author name</small>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex, explicabo rerum inventore quod id a esse vero ill...
              </p>
            </div>
            <div className="playModules">
              <span>13 modules</span>
              <img src={playIcon} alt="play icon" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default SearchResults
