import React from "react"
import { Button } from "../../components"
import { useHistory } from "react-router-dom"
import image_homepage from "../../assets/home_page_img.svg"

function HomeIntro() {
  const history = useHistory()

  const findCourse = () => history.push("/search")

	return (
		<section className="homeIntro">
			<div className="col text">
				<h1 className="title">
					Because you shouldn't be overwhelmed when learning
				</h1>
				<p className="description">
					Find courses and quality informations fast and never get scared of
					learning a new thing again.
				</p>
				<Button className="cta" rounded onClick={findCourse}>
					Find a course
				</Button>
			</div>
			<div className="col image">
				<img className="img" src={image_homepage} alt="Woman holding a book" />
			</div>
		</section>
	)
}

export default HomeIntro
