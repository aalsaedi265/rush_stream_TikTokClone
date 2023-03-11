import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar' 


export default function App({ Component, pageProps }: AppProps) {
  // ssr -? server side rendering  runig on the BACKEND
  const [isSSR, setIsSSr] = useState(true)
// if running on the on the client in the react use the effect
  useEffect(()=>{
    //prevent server side redning whe nusing the backend
    setIsSSr(false)
  },[])
  
  if(isSSR) return null
  //when the server is turend of show up the compneing
  return (
  <div className='xl:w-[1200px] m-auto overflow-hidden h-[100vh]'>
    <Navbar/>
    <div className='flex gap-6 md:gap-20'>
      <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
        <Sidebar/>
      </div>
      <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
        <Component {...pageProps} />
      </div>
    </div>
  </div>
  
  
  )
}
