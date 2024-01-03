/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Content = () => {
  return (
    <section className="bg-white dark:bg-white">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-pink-600 sm:text-4xl lg:text-5xl">Immersive experience&apos;s and memories that last forever.</h2>
            <p className="mb-4">Step into a world where reality blurs with imagination, where your senses are fully engaged in the moment. Whether you&apos;re wearing a VR headset for a video game, wandering through an art installation that defies conventional standards, or taking in an interactive theater performance, immersive experiences take you on a ride that transcends the ordinary.</p>
            
        </div>
        <div className=" mt-8">
            <img className="w-full h-full rounded-lg" src="vr2.png" alt="office content 1"/>
            
        </div>
    </div>
</section>
  )
}

export default Content