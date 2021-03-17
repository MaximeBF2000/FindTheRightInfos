import React from 'react'

function Pricing() {
  return (
    <div className="pricing sizeContainer">
      <div className="title">Pricing</div>
      <div className="priceGrid">
        <div className="priceCol">
          <div className="priceCol__header">
            <span className="name">Basic</span>
            <span className="price">$0.00 forever</span>
          </div>
          <ul className="priceCol__body">
            <li className="feature">Access to free content <br/> <span className="invisible">a</span></li>
            <li className="feature">Access to our sorting and filter algorithms</li>
            <li className="feature">Access to Introduction of every premium courses</li>
            <li className="feature">Free forever !</li>
          </ul>
        </div>
        <div className="priceCol active">
          <div className="priceCol__header">
            <span className="name">Premium</span>
            <span className="price">$15.99 / mo</span>
          </div>
          <ul className="priceCol__body">
            <li className="feature">Access to all free and premium courses</li>
            <li className="feature">Access to our sorting and filter algorithms</li>
            <li className="feature">Access to instant chat with your teachers and other students</li>
            <li className="feature">Access to Introduction of every elite courses</li>
          </ul>
        </div>
        <div className="priceCol">
          <div className="priceCol__header">
            <span className="name">Elite</span>
            <span className="price">$59.99 / mo</span>
          </div>
          <ul className="priceCol__body">
            <li className="feature">Access to all the courses, up to $10.000 valued course</li>
            <li className="feature">Access to our sorting and filter algorithms</li>
            <li className="feature">Access to instant chat with your teachers and other students</li>
            <li className="feature">24 / 7 student support</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pricing
