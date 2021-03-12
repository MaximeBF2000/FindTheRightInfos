import React from 'react'
import downloadIcon from "../../assets/download_icon.svg"

function CourseRessources() {
  return (
    <div className="sizeContainer courseRessources">
      <h2 className="courseTitle">RESSOURCES</h2>
      <p className="courseSubtitle">Find all the ressources of the course here, exercice files, demo files, assets...</p>

      <ul className="ressources">
        <li className="ressource">
          <div className="ressource__filename">Exercice 01.docx</div>
          <div className="ressource__row">
            <div className="ressource__fileweight">12.36 Mo</div>
            <img className="ressource__download" src={downloadIcon} alt="Download button" />
          </div>
        </li>

        <li className="ressource">
          <div className="ressource__filename">Exercice 01.docx</div>
          <div className="ressource__row">
            <div className="ressource__fileweight">12.36 Mo</div>
            <img className="ressource__download" src={downloadIcon} alt="Download button" />
          </div>
        </li>

        <li className="ressource">
          <div className="ressource__filename">Exercice 01.docx</div>
          <div className="ressource__row">
            <div className="ressource__fileweight">12.36 Mo</div>
            <img className="ressource__download" src={downloadIcon} alt="Download button" />
          </div>
        </li>

      </ul>
    </div>
  )
}

export default CourseRessources
