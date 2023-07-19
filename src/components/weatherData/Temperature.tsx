import React from "react"
import style from "./Temperature.module.css"

interface propType {
  minTemp: number
  maxTemp: number
  currTemp: number
  country: string
  countryIcon: string
}

const Temperature = ({
  minTemp,
  maxTemp,
  currTemp,
  country,
  countryIcon,
}: propType) => {
  return (
    <div className={style.container}>
      <div className={style.title}>Today&apos;s Weather</div>
      <div className={style.curr}>{currTemp}&deg; </div>
      <div className={style.min}>L:{minTemp}&deg;</div>
      <div className={style.max}>H:{maxTemp}&deg;</div>
      <div className={style.country}>
        {country}, {countryIcon}
      </div>
    </div>
  )
}

export default Temperature
