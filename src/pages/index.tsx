import Head from "next/head"
import Layout from "@/components/layout/Layout"
import { useState } from "react"
import Form from "@/components/form/Form"
import WeatherInfo from "@/components/weatherData/WeatherInfo"

export default function Home() {
  const [weatherData, setWeatherData] = useState<
    Record<string, any> | undefined
  >(undefined)
  const handleWeatherData = (data: Record<string, any>) => {
    setWeatherData(data)
  }
  const handleReclickOne = (data: Record<string, any>) => {
    setWeatherData(data)
  }
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=optional"
        />
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
