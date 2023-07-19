import React from "react"
import style from "./WeatherInfo.module.css"

interface propType {
  weatherData: Record<string, any>
}

const WeatherInfo = ({ weatherData }: propType) => {
  console.log(weatherData)
  const date = new Date(
    new Date().toLocaleString("en", { timeZone: "Singapore" })
  )
  console.log(date)
  return (
    <div>
      {weatherData.name} , {weatherData.sys.country}
      {weatherData.weather[0].main}
      Description: {weatherData.weather[0].description}
      Temperature: {Math.floor(weatherData.main.temp - 273)}
      Temperature Max: {Math.floor(weatherData.main.temp_max - 273)}
      Temperature Min: {Math.floor(weatherData.main.temp_min - 273)}
      Humidity: {weatherData.main.humidity}
      Time: {date.toLocaleDateString() + " " + date.toLocaleTimeString()}
    </div>
  )
}

export default WeatherInfo
