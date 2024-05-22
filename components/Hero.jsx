import Link from 'next/link';
import React from 'react';

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-8 bg-fixed bg-center bg-cover'>
  <video
  src="https://peach-informal-llama-875.mypinata.cloud/ipfs/QmYnWQhShQfcknVCPc8nGUTn2Qu6GPGYS24sYM2SabzZM9"
  className="absolute top-0 left-0 w-full h-full object-cover z-0"
  autoPlay
  loop
  muted
  playsInline // Add playsInline for mobile
   // Autoplay on screens larger than "lg" (you can adjust the breakpoint)
>
  Your browser does not support the video tag.
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
