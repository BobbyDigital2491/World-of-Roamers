/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

const Team = () => {        
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="max-w-5xl text-2xl font-bold leading-none text-center tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-pink-600 md:text-5xl lg:text-6xl lg:max-w-7xl">Co - Founders</h2>
        </div>

        <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
        
            <div>
                <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44" src="EJ.png" alt="" />
                <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">Ej Gailliard</p>
                <p className="mt-2 text-base font-normal text-gray-600 font-pj">Chief Executive Officer</p>
            </div>
            
            <div>
                <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="Brandi.png" alt="" />
                <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">Brandi Fox</p>
                <p className="mt-2 text-base font-normal text-gray-600 font-pj">Chief Operating Officer</p>
            </div>

            <div>
                <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44" src="TJ.png" alt="" />
                <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">Tawny Jones</p>
                <p className="mt-2 text-base font-normal text-gray-600 font-pj">Chief Marketing Officer</p>
            </div>

            <div>
                <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44" src="rpb.jpg" alt="" />
                <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">Robert Lawrence</p>
                <p className="mt-2 text-base font-normal text-gray-600 font-pj">Chief Technology Officer</p>
            </div>
        </div>

        
    </div>
</section>

    )
}
export default Team;