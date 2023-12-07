import styles from "./MainCont.module.css"
import {useDispatch} from 'react-redux'

const Buttons = () => {

    const dispatch = useDispatch();

    const handleInc = () => {
        dispatch({type: 'plus'})
    }
    const handleDec = () => {
        dispatch({type: 'minus'})
    }
    const handleRes = () => {
        dispatch({type: 'reset'})
    }
    return(
        <div className={styles.buttons}>
            <button onClick={handleInc} className={styles.button1}>Увеличить</button>
            <button onClick={handleDec} className={styles.button2}>Уменьшить</button>
            <button onClick={handleRes} className={styles.button3}>Сбросить</button>
        </div>
    )
}

export default Buttons