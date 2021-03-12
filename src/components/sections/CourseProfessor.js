import React from 'react'
import { Button } from "../index"

function CourseProfessor() {
  return (
    <div className="sizeContainer courseProfessor">
      <div className="courseTitle">YOUR PROFESSOR</div>
      <div className="row">
        <img className="photo" src="https://via.placeholder.com/1000" alt="" />
        <div className="content">
          <h3 className="name">PROFESSOR NAME</h3>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, perspiciatis eos. Voluptatibus maxime at cum recusandae, quo dolor provident nostrum quam odit beatae totam, commodi nesciunt laudantium et sapiente? Dolorem architecto commodi sunt. Magni illo veniam hic incidunt. Dignissimos amet deleniti culpa pariatur itaque! Temporibus ipsum est sunt veritatis amet sequi sapiente corrupti deleniti qui cum non, fuga exercitationem autem corporis esse quod reprehenderit et! Ad soluta ab natus aspernatur voluptates. Tempora libero quidem voluptatem.
          </p>
          <Button className="cta" rounded>Ask me a question</Button>
        </div>
      </div>
    </div>
  )
}

export default CourseProfessor
