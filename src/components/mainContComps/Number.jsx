import styles from "./MainCont.module.css"
import { useSelector } from 'react-redux'

const Number = () => {
    const num = useSelector((state) => state.number)
    return(
        <div className={styles.mainContainerNumber}>{num}</div>
    )
}

export default Number