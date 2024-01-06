import React from 'react'
import Head from 'next/head'
import Hero5 from '../components/Hero5'
import Footer from '../components/Footer'

const contact = () => {
  return (
    <div>
      <Head>
        <title>World of Roamers - Contact Us</title>
        <meta name='World of Roamers' content='The Official World of Roamers Website - Contact Us' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <br/><br/><br/><br/>
        <Hero5 heading='Contact' message='Submit the form below for more work and quotes.' />
        
        <Footer />
    </div>
  )
}

export default contact