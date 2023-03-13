import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { Video } from '../types'

interface IProps{
  videos: Video[]
}

// const inter = Inter({ subsets: ['latin'] })

const Home = ({videos}: IProps) =>{

  console.log(videos)
  return (

    <>
    <h1 className="text-3xl font-bold underline">
      ZZZZAAAWWORRRLLLDDOOOO!
    </h1>
    </>
  )
}

export const getServerSideProps = async ()=>{

  const {data} = await axios.get(`http://localhost:3000/api/post`);

  return { 

    props:{
      videos: data
    }
  }
}

export default Home