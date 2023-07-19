import { NextApiRequest, NextApiResponse } from "next"
import { getWeather } from "@/lib/getWeather"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const city = req.query.city as string
    if (city.length === 0) {
      return res.json("both field cannot be empty")
    }
    const weatherData = await getWeather(city)

    if (typeof weatherData !== "object" && weatherData !== null) {
      return res.json(weatherData)
    }
    return res.json(weatherData)
  } else {
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
