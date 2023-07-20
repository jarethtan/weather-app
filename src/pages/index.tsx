import Head from "next/head"
import Layout from "@/components/layout/Layout"
import { useState } from "react"
import Form from "@/components/form/Form"
import WeatherInfo from "@/components/weatherData/WeatherInfo"

export default function Home() {
  const [weatherData, setWeatherData] = useState<
    Record<string, any> | undefined
  >(undefined)
  // callback function from Form component
  const handleWeatherData = (data: Record<string, any>) => {
    setWeatherData(data)
  }
  // callback function to bring weather data from weather component to index page
  const handleReclickOne = (data: Record<string, any>) => {
    setWeatherData(data)
  }
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/weather.ico" />
      </Head>
      <main>
        <Layout>
          <Form handleWeatherData={handleWeatherData} />
          {weatherData !== undefined ? (
            <WeatherInfo
              weatherData={weatherData}
              handleReclickOne={handleReclickOne}
            />
          ) : (
            ""
          )}
        </Layout>
      </main>
    </>
  )
}
