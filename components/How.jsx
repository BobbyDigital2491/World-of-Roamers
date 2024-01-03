/* eslint-disable @next/next/no-img-element */
import React from 'react'

const How = () => {
  return (
    <div>
        <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-pink-600 sm:text-4xl lg:text-5xl">
        How does it work?
        </h2>

        <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">We provide a range of activities and experiences. Let&apos;s get started!</p>
        </div>

        <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700"> 1 </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Choose Your Location</h3>
                    <p className="mt-4 text-base text-gray-600">Choose up to 4-9 people for your party size and your age range. </p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700"> 2 </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Choose your experience</h3>
                    <p className="mt-4 text-base text-gray-600">Pick from the dozens of games and experiences for you and your friends.</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700"> 3 </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Choose your Friends</h3>
                    <p className="mt-4 text-base text-gray-600">After your event is booked, you are free to start roaming.</p>
                </div>

                
            </div>
            <br/>
            <div className=''>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700"> 4 </span>
                    </div>
                    <h3 className="mt-6 text-center text-xl font-semibold leading-tight text-black md:mt-10">Start Roaming</h3>
                    <p className="mt-4 text-center text-base text-gray-600">After your event is booked, you are free to start roaming.</p>
                </div>
        </div>
    </div>
</section>
</div>
  )
}

export default How