import React from 'react'
import Hero2 from '../components/Hero2'
import Head from 'next/head';
import Footer from '../components/Footer';
import About from '../components/About';



const about = () => {
  return (
    <div>
      <Head>
        <title>World of Roamers - About Us</title>
        <meta name='World of Roamers' content='About Us' />
        <link rel='icon' href='nobg.png' />
      </Head>
      <br/><br/><br/><br/>
        <Hero2 heading='About Us' message='World of Roamers Team.' />
        <About />
        
        
        <Footer />
    </div>
  )
}

export default about