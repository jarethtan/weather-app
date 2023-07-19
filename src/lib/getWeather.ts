const weatherApiKey = process.env.WEATHER_API_KEY
export const getWeather = async (city?: string) => {
  const cityResult = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${weatherApiKey}`
  )
  const cityResponse = await cityResult.json()
  if (cityResponse.length === 0) {
    return "Not found"
  }
  const weatherResult = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${cityResponse[0].lat}&lon=${cityResponse[0].lon}&appid=${weatherApiKey}`
  )
  const weatherResponse = await weatherResult.json()
  return weatherResponse
}
