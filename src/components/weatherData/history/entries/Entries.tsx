import React from "react"
import style from "./Entries.module.css"

interface propType {
  entry: Record<string, string>
  handleReclickThree: (data: Record<string, any>) => void
  handleDeleteLocalEntry: (data: string) => void
  dataKey: string
}

const Entries = ({
  entry,
  handleReclickThree,
  handleDeleteLocalEntry,
  dataKey,
}: propType) => {
  const handleResubmit = async (city: string) => {
    const data = await fetch(`/api/weather/?city=${city}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (data.ok) {
      const fetchedData = await data.json()
      if (typeof fetchedData === "object" && fetchedData !== null) {
        handleReclickThree(fetchedData)
        return
      }
      throw new Error("Cannot resubmit. Something went wrong")
    }
  }
  return (
    <ul className={style.list} key={dataKey}>
      <span className={style.city}>
        {entry.city}, {entry.countryIcon}
      </span>
      <span className={style.time}>{entry.time}</span>
      <button
        onClick={() => handleResubmit(entry.city)}
        className={style.subButton}
      >
        <span
          style={{ fontSize: "1rem" }}
          className="material-symbols-outlined"
        >
          search
        </span>
      </button>
      <button
        onClick={() => handleDeleteLocalEntry(dataKey)}
        className={style.delButton}
      >
        <span
          style={{ fontSize: "1rem" }}
          className="material-symbols-outlined"
        >
          delete
        </span>
      </button>
    </ul>
  )
}

export default Entries
