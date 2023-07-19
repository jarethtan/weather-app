import React, { useEffect, useState } from "react"
import style from "./History.module.css"

interface propType {
  time: string
  country: string
  countryIcon: string
}

const History = ({ country, countryIcon, time }: propType) => {
  // const [data, setData] = useState<Record<string, string> | undefined>(
  //   undefined
  // )
  // setData({ country, countryIcon, date })
  if (time !== undefined || country !== undefined) {
    localStorage.setItem(time, JSON.stringify({ country, countryIcon, time }))
  }
  const allKeys = Object.keys(localStorage)
  return (
    <div className={style.container}>
      {allKeys.map((key) => {
        return <div key={key}>{localStorage.getItem(key)}</div>
      })}
    </div>
  )
}

export default History
