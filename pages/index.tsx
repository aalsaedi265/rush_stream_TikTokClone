import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import axios from 'axios'


// const inter = Inter({ subsets: ['latin'] })

function Home() {

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      ZZZZAAAWWORRRLLLDDOOOO!
    </h1>
    </>
  )
}

export const getServerSideProps = async ()=>{

  const res = await axios.get(`http://localhost:3000/api/post`);

  console.log(res.data.name)
  return { }
}

export default Home