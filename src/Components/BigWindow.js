"use client"
import styles from '../styles/BigWindow.module.css'
import Window from './Window';
export default function BigWindow(params) {
    let key = params.id;
    let val = params.val;
    return(
        <>
            <div className={styles.bigBoard}>
                <Window id={key+"/"+"1"} val={val}></Window>
                <Window id={key+"/"+"2"} val={val}></Window>
                <Window id={key+"/"+"3"} val={val}></Window>
                <Window id={key+"/"+"4"} val={val}></Window>
            </div>
        </>
    )
}