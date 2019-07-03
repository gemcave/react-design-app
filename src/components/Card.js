import React from "react"
import "./Card.css"

const Card = ({ title, text, image }) => {
  return (
    <div className="Card">
      <img src={image} alt={"card background"} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Card
