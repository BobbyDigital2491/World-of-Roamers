/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'

const HBanner = () => {
  return (
    <div>
      <section
  className="overflow-hidden bg-[url(https://www.northeastern.edu/graduate/blog/wp-content/uploads/2021/06/Multicultural-counseling.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="lg:text-center md:text-center sm:text-center">
      <h2 className="text-2xl font-bold text-yellow-400 sm:text-3xl md:text-5xl">
        Pieces 2 Peace
      </h2>
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
        Wellness Center LLC
      </h2>

     

      <div className="mt-4 sm:mt-8">
        <a
          href="/about"
          className="inline-block rounded-full bg-yellow-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-black focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default HBanner
