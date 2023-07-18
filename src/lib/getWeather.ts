const weatherApiKey = process.env.WEATHER_API_KEY;
export const getWeather = async (country?: string, city?: string) => {
  const result = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${weatherApiKey}`
  );
  //   if (result.ok) {
  //     console.log("Successfully retrieve weather API info");
  //     return await result.json();
  //   } else {
  //     console.log("Unscuccessful connection with weather API");
  //     return await result.json();
  //   }
  console.log("WHARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR", await result.json());

  //   const fetchData = (capital: string, city: string) =>
  //     fetch(
  //       "https://api.openweathermap.org/data/2.5/weather?q=" +
  //         capital +
  //         "&units=metric&appid=" +
  //         weatherApiKey
  //     )
  //       .then((res) => {
  //         if (res.ok) {
  //           console.log("Successfully retrieve weather API info");
  //           return res.json();
  //         } else {
  //           console.log("Unscuccessful connection with weather API");
  //           return Promise.reject(res);
  //         }
  //       })
  //       .then((data) => displayWeather(data))
  //       .catch((err) => console.log("Error: ", err));
};
