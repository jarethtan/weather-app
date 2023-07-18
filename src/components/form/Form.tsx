import React from "react";
import style from "./Form.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { getWeather } from "@/lib/getWeather";

export type WeatherFormFields = {
  country: string;
  city: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WeatherFormFields>();

  const onSubmit: SubmitHandler<WeatherFormFields> = async (data) => {
    console.log(data);
    const weatherData = await fetch("/api/weather", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log("WHATTTTTTTT", weatherData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label id="country">Country: </label>
      <input
        id="country"
        {...register("country", {
          minLength: 4,
          maxLength: 50,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors.country && <span>This field is required</span>}
      <label id="city">City: </label>
      <input
        id="city"
        {...register("city", {
          minLength: 4,
          maxLength: 50,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors.city && <span>This field is required</span>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
