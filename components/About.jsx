/* eslint-disable @next/next/no-img-element */
import React from 'react'

const About = () => {
  return (
    <div className="bg-white py-6 sm:py-6 lg:py-4">
  <div className="mx-auto max-w-screen-md px-4 md:px-8">
    <h1 className="max-w-5xl text-2xl font-bold text-center leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-pink-600 md:text-5xl lg:text-6xl lg:max-w-7xl">Our competitive advantage</h1>
    <br/>
    <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
    World of Roamers VR, headquartered in Charlotte, NC, will be an industry leader in virtual reality (VR) experiences, specializing in accessible and innovative mobile VR solutions for individuals, businesses, and schools. Our focus areas include personalized experiences for special occasions, therapeutic support for mental health and special needs, and immersive educational content. 
   </p>
   <br></br>
   <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Key Offerings</h2>
    {/*<p className="mb-6 text-gray-500 sm:text-lg md:mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>*/}
    <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
      <li className='font-bold'>Mobile VR Experiences for Special Occasions:</li>
      <h1>&nbsp;World of Roamers VR revolutionizes special occasions with personalized and mobile VR experiences, ensuring accessibility and flexibility for clients.  This includes birthday parties, group gatherings, and more. </h1>
      <br/>
      <li className='font-bold'>Mental Health Support</li>
      <h1>&nbsp;Recognizing the therapeutic potential of VR, our immersive experiences are designed to support mental health and well-being, offering relaxation and stress relief.  This is great as a supportive service for schools and mental health therapists.</h1>
      <br/>
      <li className='font-bold'>Special Needs Support</li>
      <h1>&nbsp;Inclusivity is fundamental to our values. World of Roamers VR tailors experiences to support individuals with special needs including senior citizens with mobility issues, children suffering from long term or terminal illnesses by offering adaptive content for sensory stimulation and cognitive development.</h1>
      <br/>
      <li className='font-bold'>Educational Enrichment</li>
      <h1>&nbsp;Leveraging VR for education, we provide immersive learning experiences that augment traditional methods, offering students dynamic and interactive approaches to various subjects.  This includes virtual field trips, virtual physical exercise, and self care spaces.</h1>
      <br/>
    </ul>

    <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">“VR is a way to escape the real world into something more fantastic. It has the potential to be the most social technology of all time.” 
    <br/>
    <h1 className='font-bold'>Palmer Luckey, Founder of the Oculus</h1>
    </blockquote>

    <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
      <img src="https://media.istockphoto.com/id/1153003879/photo/african-man-wearing-virtual-reality-headset.jpg?s=170667a&w=0&k=20&c=chyu73HbUIKFRyUdRpPXfBDdllKK7VCKS2epxw_ciYU=" loading="lazy" alt="Photo by Minh Pham" className="h-full w-full object-cover object-center" />
    </div>

    {/*<h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Unique Value Proposition</h2>

    {/*<p className="text-gray-500 sm:text-lg">Innovation, Accessibility, and Inclusivity</p>*/}
    
    {/*<ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
      <br/>
      <li>Innovation, Accessibility, and Inclusivity</li>
      <h1>&nbsp;Our mobile VR setup ensures accessibility, making VR experiences available to diverse audiences. World of Roamers VR is committed to supporting Title 1 schools, hospitals, and long-term care facilities.</h1>
      <br/>

      <li>Therapeutic Impact and Personalization</li>
      <h1>&nbsp;Our experiences prioritize therapeutic benefits and personalization, catering to the unique needs and preferences of each client.</h1>
      <br/>

      <ol className=''><span className='font-bold'>Strategic Growth Initiatives</span>
      <br/>
        <h1 className=''><span className='underline'>VR Tailgate Services:</span>
        &nbsp;Introducing a VR tailgate service, we redefine the fan experience, allowing users to virtually attend professional sports games from their tailgate locations. This innovative and cost-effective alternative enhances engagement and revenue opportunities.
      </h1>
      <br/>
      <h1 className=''><span className='underline'>VR Cafe:</span>
        &nbsp;Opening a VR cafe, we provide a walk-in space for guests to enjoy specialty VR experiences. Themed birthday parties align VR games with chosen themes, and the cafe becomes a versatile venue for school and camp field trips, ensuring a consistent revenue stream.
      </h1>
      <br/>
      <h1 className=''><span className='underline'>VR Arena Championships:</span>
        &nbsp;Hosting VR Arena Championships taps into the competitive spirit of VR enthusiasts, fostering community engagement and establishing World of Roamers VR as a prominent player in the VR entertainment industry.
      </h1>
      <br/>
        </ol>
      
      <br/>
    </ul>
    <br></br>*/}

<p className="mb-3 text-center text-black sm:text-lg md:mb-8 dark:text-gray-600">World of Roamers VR&apos;s commitment to innovation, inclusivity, and strategic growth initiatives positions us as a dynamic player in the VR landscape. Our sample business model outlines clear revenue streams and cost structures, ensuring consistent growth and sustained positive impact.
For further discussions or inquiries, please feel free to contact us. We look forward to pioneering the future of VR entertainment.

  </p>


  </div>
</div>
  )
}

export default About