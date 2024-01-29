import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Canvas from '@/Components/Canvas'
import { Button, Card, CardBody, Divider } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
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
    <ChakraProvider>
      <div className={styles.body}>
        <div className={styles.header}>
          <div className={styles.heading}><Heading as="h1" textColor={"teal"}>Scribble Pad</Heading> </div>  
          <div><Button colorScheme='teal' variant="outline" size={"lg"} onClick={()=>{window.location.reload(false)}} > Clean the Scribble Pad </Button> </div>
        </div> 
        <Card variant={"outline"} >
          <CardBody>
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
          </CardBody>
        </Card>    

      </div>
    </ChakraProvider>
  )
}
