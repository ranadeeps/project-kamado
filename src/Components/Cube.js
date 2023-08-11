import { useState } from 'react';
import styles from '../styles/Cube.module.css'
export default function Cube(params) {
    let id=params.id;
    let val=params.val;
    return(
        <>
            <button className={styles.pixel} onClick={changeColor} id={id} onMouseOver={()=>{changeColor()}}>

            </button>
        </>
    )
    function changeColor(params) {
        if(val===true){
            document.getElementById(id).style.backgroundColor="green";
        }

    }
}