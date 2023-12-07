import styles from "./footer.module.css"

const FooterMenu =() => {
    return(
        <div className={styles.footerMenu}>
            <ul className={styles.footerMenuList}>
                <li>Партнерам</li>
                <li>Разработчикам</li>
                <li>Вакансии</li>
            </ul>
        </div>
    )
}

export default FooterMenu