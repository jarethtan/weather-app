import { NextApiRequest, NextApiResponse } from "next";
import { getWeather } from "@/lib/getWeather";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.log("WHATTTTTTTTTTTTTTTTTT", req);
    const weatherData = await getWeather(req.body);
    return weatherData;
  } else {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
