import React, { useState } from "react"
import style from "./Form.module.css"
import { useForm, SubmitHandler } from "react-hook-form"
export type WeatherFormFields = {
  country: string
  city: string
}

interface propType {
  handleWeatherData: (data: Record<string, any>) => void
}

const Form = ({ handleWeatherData }: propType) => {
  const [error, setError] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WeatherFormFields>()

  const onSubmit: SubmitHandler<WeatherFormFields> = async (e) => {
    setError("")
    const data = await fetch(`/api/weather/?city=${e.city}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (data.ok) {
      const fetchedData = await data.json()
      if (typeof fetchedData === "object" && fetchedData !== null) {
        handleWeatherData(fetchedData)
        return
      }
      setError(fetchedData)
      return
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
      <input
        id="city"
        {...register("city", {
          maxLength: 30,
          pattern: /^[A-Za-z]+$/i,
        })}
        placeholder="City"
        className={style.cityInput}
      />
      <button type="submit" className={style.subButton}>
        <span className="material-symbols-outlined">search</span>
      </button>
      <br />
      {errors.city && (
        <span className={style.errors}>
          Input must be less than 30 characters.
        </span>
      )}
      {error.length !== 0 ? <span className={style.errors}>{error}</span> : ""}
    </form>
  )
}

export default Form
