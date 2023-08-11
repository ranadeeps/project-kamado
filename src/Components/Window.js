"use client"
import { useState } from 'react'
import styles from '../styles/Window.module.css'
import Cube from './Cube';

export default function Window(params) {
    let key = params.id;
    let val = params.val;
    let cubes=[];

    for (let index = 0; index < 144; index++) {
        cubes.push(<Cube key={index} id={key+"/"+index} val={val} ></Cube>)
    }
    return(
        <>
            
            <div className={styles.board}>
                {cubes}
            </div>
        </>
    )
}