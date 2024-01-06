import React from 'react'
import Hero2 from '../components/Hero2'
import Head from 'next/head';
import Footer from '../components/Footer';
import About from '../components/About';
import EventPhotos from '../components/EventPhotos'



const about = () => {
  return (
    <div>
      <Head>
        <title>World of Roamers - About Us</title>
        <meta name='World of Roamers' content='About Us' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <br/><br/><br/><br/>
        <Hero2 heading='About Us' message='World of Roamers Team.' />
        <EventPhotos />
        <About />
        
        
        <Footer />
    </div>
  )
}

export default about