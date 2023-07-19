import Head from "next/head"
import Layout from "@/components/layout/Layout"
import { Fragment, useState } from "react"
import Form from "@/components/form/Form"
import WeatherInfo from "@/components/weatherData/WeatherInfo"
import History from "@/components/weatherData/History"

export default function Home() {
  const [weatherData, setWeatherData] = useState<
    Record<string, any> | undefined
  >(undefined)
  const handleWeatherData = (data: Record<string, any>) => {
    setWeatherData(data)
  }
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Form handleWeatherData={handleWeatherData} />
          {weatherData !== undefined ? (
            <Fragment>
              <WeatherInfo weatherData={weatherData} />
            </Fragment>
          ) : (
            ""
          )}
        </Layout>
      </main>
    </>
  )
}
