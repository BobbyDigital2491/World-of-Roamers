import React from 'react'

const Hero2 = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover'>
      <video autoPlay loop muted playsInline className='absolute top-0 left-0 w-full h-full object-cover z-0'>
      <source src='https://www.dropbox.com/scl/fi/jrfotyfs0d8sqmysi4xdj/download.mp4?rlkey=86ibm0ft2as7z6jivvo68s2iw&dl=0' type='video/mp4' />
      {/* Include alternative sources for different video formats if needed */}
    </video>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]' />
      <div className='p-5 text-white text-center z-[2] mt-[-10rem]'>
        <br/>
        <h2 className='text-5xl font-bold'>About Us</h2>
        <p className='py-5 text-xl'>Explore Beyond Reality with World of Roamers VR – Your Gateway to Immersive Adventures!</p>
        
      </div>
    </div>
  )
}

export default Hero2