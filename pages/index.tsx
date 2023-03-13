import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { Video } from '../types'
import NoResults from '../components/NoResults'
import VideoCard from '../components/VideoCard'

interface IProps{
  videos: Video[]
}

// const inter = Inter({ subsets: ['latin'] })

const Home = ({videos}: IProps) =>{

  console.log(videos)
  return (

    <div className='flex flex-col gap-10 videos h-full'>
      RETURN TO ZERO
      {videos.length ?(
        videos.map((video: Video) =>(
          <VideoCard post={video} key={video._id}/>
        ))
      ) : (
        <NoResults text={'No Videos'} />
      )}   
    </div>
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