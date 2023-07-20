import React, { useEffect, useState } from "react"
import style from "./History.module.css"
import Entries from "./entries/Entries"

interface propType {
  time: string
  city: string
  countryIcon: string
  handleReclickTwo: (data: Record<string, any>) => void
}

const History = ({ city, countryIcon, time, handleReclickTwo }: propType) => {
  const [deleteEntry, setDeleteEntry] = useState<string | null>("")
  useEffect(() => {
    if (time !== undefined || city !== undefined) {
      const timeInt = new Date(time).getTime()
      localStorage.setItem(
        timeInt.toString(),
        JSON.stringify({ city, countryIcon, time })
      )
    }
    if (deleteEntry !== null) {
      localStorage.removeItem(deleteEntry)
      setDeleteEntry(null)
    }
  }, [city, countryIcon, time, deleteEntry])

  const allKeys = Object.keys(localStorage)

  const firstNineKeys = allKeys
    .map((key) => {
      return Number(key)
    })
    .sort((a, b) => b - a)
    .slice(0, 9)

  const handleReclickThree = (data: Record<string, any>) => {
    handleReclickTwo(data)
  }
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
          <Entries
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
