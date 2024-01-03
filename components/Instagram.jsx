import React from 'react'
import insta1 from '../public/insta1.png';
import insta2 from '../public/insta2.png';
import insta3 from '../public/insta3.png';
import insta4 from '../public/insta4.png';
import insta5 from '../public/insta5.png';
import insta6 from '../public/insta6.png';
import InstagramImg from './InstagramImg';


const Instagram = () => {
  return (
    <div id='instagram' className='max-w-[1240px] mx-auto text-center py-24'>
        <a href='https://www.instagram.com/worldofroamersvr/'><p className='text-2xl font-bold'>Follow us on Instagram</p></a>
        <p className='pb-4'>@WorldofRoamers</p>
       {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
    <a href='https://www.instagram.com/p/CznhLHdOmG3/'><InstagramImg socialImg={insta1} /></a>
    <a href='https://www.instagram.com/p/Czng66-OGoc/'><InstagramImg socialImg={insta2} /></a>
    <a href='https://www.instagram.com/p/CzngxJiuiEO/'><InstagramImg socialImg={insta3} /></a>
    <a href='https://www.instagram.com/p/CzngmnquFwI/'><InstagramImg socialImg={insta4} /></a>
    <a href='https://www.instagram.com/p/CzngfAkuabt/'><InstagramImg socialImg={insta5} /></a>
    <a href='https://www.instagram.com/p/CzngZIBOBmR/'><InstagramImg socialImg={insta6} /></a>
      </div> */}

    </div>
  )
}

export default Instagram