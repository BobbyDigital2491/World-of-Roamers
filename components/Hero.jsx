import Link from 'next/link';
import React from 'react';

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover'>
  <video autoPlay loop muted playsInline className='absolute top-0 left-0 w-full h-full object-cover z-0'>
  <source src='https://www.facebook.com/100000191167297/videos/282028248159168/' type='video/mp4' />
</video>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold text-center'>{heading}</h2>
        <p className='py-5 text-xl text-center'>{message}</p>
        <button className='px-8 py-2 border mx-auto block bg-gradient-to-r from-indigo-700 to-pink-600'><Link href='/services'>Start Roaming</Link></button>
      </div>
    </div>
  );
};

export default Hero;
