import React from 'react'
import Head from 'next/head'
import Hero5 from '../components/Hero5'
import FAQ from '../components/FAQ'

const Faq = () => {
  return (
    <div> <Head>
    <title>World of Roamers - FAQ</title>
    <meta name='World of Roamers' content='The Official World of Roamers Website' />
    <link rel='icon' href='nobg.png' />
  </Head>
  <br/><br/><br/><br/>
    <Hero5 heading='Frequently Asked Questions' message='Meet the brains of the operation.' />
    <FAQ/>
    </div>
  )
}

export default Faq