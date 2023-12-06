/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Content2 = () => {
  return (
    
    <div className="py-16">
    <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
      <div className="lg:bg-white dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
        <div className="md:5/12 lg:w-1/2">
          <img
            src="vr6.png"
            alt="image"
            loading="lazy"
            width=""
            height=""
          />
        </div>
        <div className="md:7/12 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-pink-600">
            Roamer Event Spaces
          </h2>
          {/*<p className="my-8 text-gray-600 dark:text-gray-300">
          Virtual Reality (VR) offers users a wild ride of immersive experiences. You can dive into the deep sea, explore ancient civilizations, or even travel to outer space.
  </p>*/}
          <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
            <div className="mt-8 flex gap-4 md:items-center">
              
              <div className="w-5/6">
                <h3 className="font-semibold text-lg text-gray-700 dark:text-black">Choose your Experience</h3>
                <p className="text-gray-500 dark:text-gray-400">Gamers get to battle it out in fantasy worlds, sports fans can feel like they&apos;re on the field, and art enthusiasts can stroll through virtual galleries.</p>
              </div> 
            </div> 
            <div className="pt-4 flex gap-4 md:items-center">
              
              <div className="w-5/6">
                <h3 className="font-semibold text-lg text-gray-700 dark:black">Hang out with friends</h3>
                <p className="text-gray-500 dark:text-gray-400">Hang out with friends in virtual spaces or find your zen with a virtual meditation session. VR&apos;s got something for everyone, making it a tech that truly changes how we live and play.</p>
              </div> 
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
                                      
  )
}

export default Content2