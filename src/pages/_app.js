import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'




export default function App({ Component, pageProps }) {

  return(
    <>
    <div className=' '>
      <Head>
      
      <title>SDG Build</title>
      <meta name="description" content="Movie app for sdg" />
      <link rel="icon" href="../assets/logo.png" />
    </Head>
 
    <div className='bg-[#0C1516] h-full      '>
       {/* <Navbar/> */}
       <Component {...pageProps} />
    </div>
   
    </div>
     
    </>
  ) 
}
