import BigWindow from "./BigWindow";
import styles from '../styles/Canvas.module.css'
export default function Canvas(params) {
    let key=params.id;
    let val=params.val;
    return(
        <>
            <div className={styles.canvas}>
                <BigWindow id={key+"/"+"1"} val={val}></BigWindow>
                <BigWindow id={key+"/"+"2"} val={val}></BigWindow>
                <BigWindow id={key+"/"+"3"} val={val}></BigWindow>
                <BigWindow id={key+"/"+"4"} val={val}></BigWindow>                
            </div>
            
        </>
    )
}