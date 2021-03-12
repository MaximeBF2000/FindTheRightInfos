import React from 'react'
import LaptopWithPhotoshopBackground from "../../assets/laptop_with_ps_background.png"
import ExpertiseSvg from "../../assets/expertise_svg.svg"

function HomeFeatures() {
  return (
    <section className="homeFeatures">
      <div className="feature">
        <div className="feature__text">
          <h2 className="title">
            FIND THE PERFECT COURSE <br/> FASTER
          </h2>
          <p className="description">
            You can find any course using our filtering and sorting algorithm : want the latest, best reviewed courses on entrepreneurship that cost less than $20 ? Find them in a sec !
          </p>
        </div>
        <div className="feature__img" style={{ transform: "scale(1.2)" }}>
          <img src={LaptopWithPhotoshopBackground} alt="Laptop with a photoshop background" />
        </div>
      </div>
      <div className="feature">
        <div className="feature__text">
          <h2 className="title">
            NO SCAMMER, ONLY MADE <br/> BY PROFESSIONALS IN THEIR FIELDS
          </h2>
          <p className="description">
            Our team carefully select the best professionals and reviews every single course before allowing it on the plateform, only got the cream of the cream here !
          </p>
        </div>
        <div className="feature__img">
          <img src={ExpertiseSvg} alt="Image of a man doing analytics" />
        </div>
      </div>
    </section>
  )
}

export default HomeFeatures
