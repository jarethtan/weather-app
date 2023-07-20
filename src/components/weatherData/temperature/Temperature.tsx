import React from "react"
import style from "./Temperature.module.css"

interface propType {
  minTemp: number
  maxTemp: number
  currTemp: number
  city: string
  countryIcon: string
}

const Temperature = ({
  minTemp,
  maxTemp,
  currTemp,
  city,
  countryIcon,
}: propType) => {
  return (
    <div className={style.container}>
      <div className={style.title}>Today&apos;s Weather</div>
      <div className={style.curr}>{currTemp}&deg; </div>
      <div className={style.min}>L:{minTemp}&deg;</div>
      <div className={style.max}>H:{maxTemp}&deg;</div>
      <div className={style.country}>
        {city}, {countryIcon}
      </div>
    </div>
  )
}

export default Temperature
