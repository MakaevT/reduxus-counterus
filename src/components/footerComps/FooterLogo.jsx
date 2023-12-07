import logo from "../../pics/logofooter.png"
import styles from "./footer.module.css"

const FooterLogo =() => {
    return(
        <div className={styles.footerLogo}>
            <img src={logo} alt="logo" />
        </div>
    )
}

export default FooterLogo