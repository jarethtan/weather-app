import React, { Fragment, PropsWithChildren } from "react"
import style from "./WeatherInfo.module.css"
import History from "./History"
import Temperature from "./Temperature"
import Description from "./Description"

interface propType {
  weatherData: Record<string, any>
}

const WeatherInfo = ({ weatherData }: propType) => {
  console.log(weatherData)
  const date = new Date(
    new Date().toLocaleString("en", { timeZone: "Singapore" })
  )
  const time = date.toLocaleDateString() + " " + date.toLocaleTimeString()
  const temp = (temp: number) => {
    return Math.floor(temp - 273)
  }
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
          alt={`weather icon for ${weatherData.weather[0].description}`}
          className={style.image}
          width={250}
        />
      </div>
      <div className={style.tempContainer}>
        <Temperature
          minTemp={temp(weatherData.main.temp_min)}
          maxTemp={temp(weatherData.main.temp_max)}
          currTemp={temp(weatherData.main.temp)}
          country={weatherData.name}
          countryIcon={weatherData.sys.country}
        />
      </div>
      <div className={style.desContainer}>
        <Description
          description={weatherData.weather[0].description}
          humidity={weatherData.main.humidity}
          time={time}
        />
      </div>
      <div className={style.historyContainer}>
        <History
          country={weatherData.name}
          countryIcon={weatherData.sys.country}
          time={time}
        />
      </div>
    </div>
  )
}

export default WeatherInfo
