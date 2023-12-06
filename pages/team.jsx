import React from 'react'
import Head from 'next/head'
import Hero3 from '../components/Hero3'
import Team from '../components/Team'
import Footer from '../components/Footer'
import EventPhotos from '../components/EventPhotos'

const team = () => {
  return (
    <div>
        <Head>
        <title>World of Roamers - Team</title>
        <meta name='World of Roamers' content='The Official World of Roamers Website' />
        <link rel='icon' href='/nobg.png' />
      </Head>
      <br/><br/><br/><br/>
        <Hero3 heading='Our Team' message='Meet the brains of the operation.' />
        <Team />
        <EventPhotos />
        <Footer />
    </div>
  )
}

export default team