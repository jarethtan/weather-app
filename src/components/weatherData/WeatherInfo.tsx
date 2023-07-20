import React from "react"
import style from "./WeatherInfo.module.css"
import History from "./history/History"
import Temperature from "./temperature/Temperature"
import Description from "./description/Description"

interface propType {
  weatherData: Record<string, any>
  handleReclickOne: (data: Record<string, any>) => void
}

const WeatherInfo = ({ weatherData, handleReclickOne }: propType) => {
  // get latest time stamp of request
  const date = new Date(
    new Date().toLocaleString("en", { timeZone: "Singapore" })
  )
  const time = date.toLocaleDateString() + " " + date.toLocaleTimeString()

  // temp function to convert kelvin to celcius
  const temp = (temp: number) => {
    return Math.floor(temp - 273)
  }

  // callback function to bring weather data from history component to weather component
  const handleReclickTwo = (data: Record<string, any>) => {
    handleReclickOne(data)
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
          city={weatherData.name}
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
          city={weatherData.name}
          countryIcon={weatherData.sys.country}
          time={time}
          handleReclickTwo={handleReclickTwo}
        />
      </div>
    </div>
  )
}

export default WeatherInfo
