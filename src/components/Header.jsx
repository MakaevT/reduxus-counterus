import React from "react";
import Logo from "./headerComps/Logo";
import Links from "./headerComps/Links";
import styles from "./App.module.css"

const Header = () => {
  return(
    <div className={styles.headerBox}>
      <Logo/>
      <Links/>
    </div>
  )
}

export default Header