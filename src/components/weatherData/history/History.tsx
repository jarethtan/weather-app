import React, { useEffect, useState } from "react"
import style from "./History.module.css"
import Entry from "./entry/Entry"

interface propType {
  time: string
  city: string
  countryIcon: string
  handleReclickTwo: (data: Record<string, any>) => void
}

const History = ({ city, countryIcon, time, handleReclickTwo }: propType) => {
  const [deleteEntry, setDeleteEntry] = useState<string | null>("")

  // useEffect to re-render component when delete or set entries in local storage
  useEffect(() => {
    if (deleteEntry !== null) {
      localStorage.removeItem(deleteEntry)
      setDeleteEntry(null)
      return
    }
    if (time !== undefined || city !== undefined) {
      const timeInt = new Date(time).getTime()
      localStorage.setItem(
        timeInt.toString(),
        JSON.stringify({ city, countryIcon, time })
      )
    }
  }, [city, countryIcon, time, deleteEntry])

  // get the latest nine search entries frm localstorage to be displayin the entry component
  const allKeys = Object.keys(localStorage)
  const firstNineKeys = allKeys
    .map((key) => {
      return Number(key)
    })
    .sort((a, b) => b - a)
    .slice(0, 9)

  // callback function to bring weather data from search entries component to history component
  const handleReclickThree = (data: Record<string, any>) => {
    handleReclickTwo(data)
  }

  // callback function to bring delete data from search entries component to history component to remove entries in local storage
  const handleDeleteLocalEntry = (data: string) => {
    setDeleteEntry(data)
  }
  return (
    <div className={style.container}>
      <div className={style.title}>Search History</div>
      {firstNineKeys.map((key) => {
        if (key === undefined) return
        const entry = localStorage.getItem(key.toString())
        if (entry === null) return null
        const parseEntry = JSON.parse(entry)
        return (
          <Entry
            key={key.toString()}
            dataKey={key.toString()}
            entry={parseEntry}
            handleReclickThree={handleReclickThree}
            handleDeleteLocalEntry={handleDeleteLocalEntry}
          />
        )
      })}
    </div>
  )
}

export default History
