import '@/styles/globals.css'
import Head from 'next/head'
import logo from '/public/pencil.ico'
export default function App({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>Project-Sketch</title>
          <link rel='icon' type='image/x-icon' href={logo.src} ></link>
        </Head>
        <Component {...pageProps} />
      </> 
    )
}
