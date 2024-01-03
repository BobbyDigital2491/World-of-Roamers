/* eslint-disable @next/next/no-img-element */

import Head from 'next/head';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import Footer from '../components/Footer';
import How from '../components/How';
import Partnership from '../components/Partnership';
import Content from '../components/Content';
import Content3 from '../components/Content3';

export default function Home() {
  return (
    <div>
      <Head>
        <title>World of Roamers</title>
        <meta name='World of Roamers' content='Welcome to The Official World of Roamers Website' />
        <link rel='icon' href="/logo.png" />
      </Head>
      <br/><br/><br/><br/>
      <Hero heading='World of Roamers'
            message='Explore Beyond Reality with World of Roamers VR – Your Gateway to Immersive Adventures!' />
      <img src='/logo.png'  className="mx-auto" alt=''/>
      <Content />
      <Partnership />
      <br/><br/><br/><br/>
      
      <How />
      <Content3 />
      
      <Instagram />
      <Footer />
    </div>
  );
}
