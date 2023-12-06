import React from 'react'

const Hero5 = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover'>
      <video
        src="https://ipfs.io/ipfs/bafybeihknvqgmll2ttmmwd4wcrla7obqjkanmjgb2v3ewyguucq4zihuaa"
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
      <div className='p-5 text-white text-center z-[2] mt-[-10rem]'>
        <br/>
        <h2 className='text-5xl font-bold'>Contact Us</h2>
        <p className='py-5 text-xl'>Send us a message and we will get back to you in timely manner.</p>
        <a href="https://form.jotform.com/233385686910162"><button className='px-8 py-2 border bg-gradient-to-r from-indigo-700 to-pink-600'>Contact Us</button></a>
      </div>
    </div>
  )
}

export default Hero5