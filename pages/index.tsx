import Navigation from '@/components/homepage/Navigation'
import TopSlider from '@/components/homepage/TopSlider'
import VideoPlayer from '@/components/homepage/VideoContent'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <TopSlider/>
      <VideoPlayer src="/video/robot.mp4" />
    </>
  )
}
