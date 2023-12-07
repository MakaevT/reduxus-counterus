import Number from "./mainContComps/Number";
import styles from "./App.module.css"
import Buttons from "./mainContComps/Buttons";

const MainContent = () => {
  return(
    <div className={styles.mainContainer}>
        <Number/>
        <Buttons/>
    </div>
  )
}

export default MainContent