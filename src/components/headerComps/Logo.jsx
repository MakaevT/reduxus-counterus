import React from "react";
import logo from '../../pics/C.png'
import styles from './Header.module.css'

const Logo = () => {
  return(
    <div className={styles.headerLogo}>
        <img src={logo} alt="logo"/>
        <div>ounter</div>
    </div>
)
}

export default Logo