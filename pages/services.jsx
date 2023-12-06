import React from 'react'
import Head from 'next/head'
import Hero4 from '../components/Hero4'
import Exp from '../components/Exp'
import Footer from '../components/Footer'

const services = () => {
  return (
    <div>
      <Head>
        <title>World of Roamers - Services</title>
        <meta name='World of Roamers' content='The Official World of Roamers Website' />
        <link rel='icon' href='nobg.png' />
      </Head>
      <br/><br/><br/><br/>
        <Hero4 heading='Our Team' message='Meet the brains of the operation.' />
        <Exp />
        
        <Footer />
    </div>
  )
}

export default services