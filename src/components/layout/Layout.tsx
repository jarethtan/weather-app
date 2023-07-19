import React, { PropsWithChildren } from "react"
import style from "./Layout.module.css"

const Layout = ({ children }: PropsWithChildren) => {
  return <div className={style.background}>{children}</div>
}

export default Layout
