import React from "react"
import style from "./Description.module.css"

interface propType {
  humidity: string
  description: string
  time: string
}

const Description = ({ description, humidity, time }: propType) => {
  return (
    <div className={style.container}>
      <span>{time}</span>
      <span>Humidity: {humidity}%</span>
      <span>{description}</span>
    </div>
  )
}

export default Description
