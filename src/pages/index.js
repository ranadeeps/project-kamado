import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Canvas from '@/Components/Canvas'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [val, setVal] = useState()
  if(typeof window !== "undefined"){
    document.body.onmousedown = function(e){
      setVal(true)
    }
    document.body.onmouseup=function(e){
        setVal(false)
    }
  }
  return (
    <>
      <div className={styles.body}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Scribble Pad</h1>   
          <button onClick={()=>{window.location.reload(false)}} > Clear </button> 
        </div>     
        <div className={styles.main}>
          <Canvas id="1" val={val} ></Canvas>
          <Canvas id="2" val={val} ></Canvas>
          <Canvas id="3" val={val} ></Canvas>
          <Canvas id="4" val={val} ></Canvas>
          <Canvas id="5" val={val} ></Canvas>
          <Canvas id="6" val={val} ></Canvas>
          <Canvas id="7" val={val} ></Canvas>
          <Canvas id="8" val={val} ></Canvas> 
          <Canvas id="9" val={val} ></Canvas>
        </div>
      </div>
    </>
  )
}
