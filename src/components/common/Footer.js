import React from 'react'
import { Button } from "../index"

function Footer() {
  return (
    <footer className="footer">
      <div>footer</div>
      <div className="newsletter">
        <h4 className="title">Subscribe to our newsletter !</h4>
        <div className="relativeContainer">
          <input 
            type="text"
            className="input"
            placeholder="Your email here..."
          />
          <Button rounded small className="subscribeBtn">Subscribe</Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
