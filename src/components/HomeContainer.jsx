import React from 'react'
import { heroData } from '../utils/Data'
import Delivery from './img/delivery.png'
import HeroBg from './img/heroBg.png'



const HomeContainer = () => {
  return (
    <section id="home" className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
      <div className='py-2 flex-1 flex flex-col items-start justify-start gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold '>
           Delivery</p>
          <div className='w-16 h-10 bg-white rounded-full overflow-hidden drop-shadow-xl'>
          <img src={Delivery} className='w-full h-full object-contain' alt='delivery'/>
          </div>
        </div>

        <p className=' text-[2.5rem] md:text-[4rem] font-bold tracking-wide text-headingColor'> 
          Your Favourite Food <span className='text-orange-600 text-[3rem] lg:text-[4.5rem]'>Delivery Partner</span>
        </p>
        <p className='text-base text-textColor text-center md:text-left lg:w-[80%]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Accusamus natus, pariatur, provident quia ipsum magni at culpa incidunt qui voluptas, recusandae veniam rem eos exercitationem explicabo adipisci veritatis! Dolorem, rem!
        </p>

          <button type='button' jus 
          className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto
          px-5 py-2 rounded-lg hover:shadow-lg 
          transition-all ease-in-out duration-100'>
            Order Now
          </button>

      </div>
      <div className='py-2 flex-1 flex items-center relative'>
          <img src={HeroBg} className='ml-auto h-275 w-full lg:w-auto lg:h-650' 
          alt='hero-bg'/>

          <div className='w-full h-full absolute top-0 md:left-20 flex items-center justify-center px-32 py-4 gap-4 flex-wrap'>
              {heroData && heroData.map(n=>(
                <div key={n.id} 
                className='w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center'>
                
                <img src={n.imgSrc} 
                className='w-40 -mt-20' alt='dn'/>
                <p className='text-xl font-semibold text-textColor'>
                  {n.name}
                </p>
                <p className='text-md text-lighttextGray font-semibold my-1 lg:my-3'>
                  {n.decp}
                </p>
                <p className='text-sm font-semibold text-headingColor'>
                  <span className='text-xs text-red-600'>Rs.</span>{n.price}</p>
                </div>
              ))}

        </div>
      </div>
    </section>
  )
}

export default HomeContainer
