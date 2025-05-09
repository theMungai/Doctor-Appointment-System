import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className='py-8 px-20 mt-10'>
      <div className='container flex items-center justify-between'>
        <div className='hero-text-container font-lato basis-[48%]'>
            <h1 className='text-[#333] text-[40px] mb-7'>Providing Quality <span className='text-customTealBlue'>Healthcare</span> For A <span className='text-customGreen'>Brighter</span> And <span className='text-customGreen'>Healthy</span> Future</h1>

            <p className='text-[#333] text-[20px] mb-[105px]'>At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry</p>

            <div className="hero-buttons flex gap-x-11">
                <button className='bg-customTealBlue text-white font-lexend text-[1.25rem] rounded-[8px] py-[13px] px-[40px]'>Appointments</button>
                <button>
                    <div className='flex items-center gap-x-6'>
                        <FontAwesomeIcon icon={faCirclePlay} className='text-customTealBlue text-[50px]'/>
                        <span className='text-[20px] text-black'>Watch Video</span>
                    </div>
                </button>
            </div>
        </div>

        <div className='relative hero-image-container basis-[48%]'>
          <div className="relative rounded-blob w-[600px] h-[600px] bg-gradient-to-br from-customTealBlue to-customGreen  ">
            <div className="relative w-[600px] h-[600px] right-0 top-[55%] transform -translate-y-1/2 z-10 rounded-imageBlob overflow-hidden">
                <img src="/src/assets/images/home-hero.png" alt="" className='w-full h-full object-cover absolute ' />     
            </div>
          </div>

          <div className="absolute top-20 left-[60%] w-[200px] z-20 bg-white rounded-[10px] px-7 py-3 text-customTealBlue font-bold shadow-md text-[23px]"> 
            24/7 <span className='text-black font-normal'>Service</span>
          </div>

          {/* Our Professionals Section */}
          <div className="w-[150px] absolute bottom-0 left-0z-20">
            <div className="bg-white rounded-[3px] px-5 py-2 shadow-md">
                <span className="text-gray-700 text-[11px] font-medium text-lg">Our Professionals</span>

                <div className="flex items-center"> 
                        <img src="/src/assets/images/professional-1.jpg" alt="User" className="cursor-pointer w-8 h-8 rounded-full border-2 border-white -mx-[8px] object-cover"/>

                        <img src="/src/assets/images/professional-2.jpg" alt="User" className="cursor-pointer w-8 h-8 rounded-full border-2 border-white -mx-[8px] object-cover"/>

                        <img src="/src/assets/images/professional-3.jpg" alt="User" className="cursor-pointer w-8 h-8 rounded-full border-2 border-white -mx-[8px] object-cover"/>

                        <img src="/src/assets/images/professional-4.jpg" alt="User" className="cursor-pointer w-8 h-8 rounded-full border-2 border-white -mx-[8px] object-cover"/>

                        <img src="/src/assets/images/professional-5.jpg" alt="User" className="cursor-pointer w-8 h-8 rounded-full border-2 border-white -mx-[8px] object-cover"/>

                        <img src="/src/assets/images/professional-6.jpg" alt="User" className="cursor-pointer w-8 h-8 rounded-full border-2 border-white -mx-[8px] object-cover"/>

                        <img src="/src/assets/images/professional-7.jpg" alt="User" className="cursor-pointer w-8 h-8 rounded-full border-2 border-white -mx-[8px] object-cover"/>

                    <div className="w-8 h-8 rounded-full bg-customTealBlue border-2 border-white flex items-center justify-center -mx-[8px]"> 
                        <span className="text-white text-sm">30+</span>  
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="find-a-doctor"></div>
    </div>
  )
}

export default Hero
