import React from "react";
import styles from "./App.module.css"
import FooterLogo from "./footerComps/FooterLogo";
import FooterMenu from "./footerComps/FooterMenu";
import FooterCopyright from "./footerComps/FooterCopyright";

const Footer = () => {
    return(
        <div className={styles.footerContainer}>
            <FooterLogo />
            <FooterMenu />
            <FooterCopyright/>
        </div>
    )
}

export default Footer