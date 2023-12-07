import React from "react";
import styles from './Header.module.css'

const Links = () => {
  return(
       <div className={styles.headerLinks}>
            <ul className={styles.headerList}>
                <li><a href="">Главная</a></li>
                <li><a href="">О нас</a></li>
                <li><a href="">Контакты</a></li>
            </ul>
       </div>
)
}

export default Links