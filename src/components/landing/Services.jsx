import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ServiceType({image, title, }){
  return(
    <div className='p-5 font-dmsans w-[32%]'>
      <img src={image} alt=""  className='w-full h-[250px] object-cover rounded-[10px]'/>
      <h2 className='text-customTealBlue font-bold text-[20px] my-5'>{title}</h2>
      <p className='text-[15px] leading-[1.8rem] w-full text-[#555555] mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil id sapiente blanditiis saepe fuga eligendi aut accusantium itaque ex autem, consequuntur fugit, dolorem, est illum expedita assumenda consectetur odit nesciunt.</p>

      <button className='flex items-center gap-x-3 font-bold text-customTealBlue text-[16px]'>
        Learn more
        <FontAwesomeIcon icon={faArrowRight}/>
      </button>
    </div>
  )
}

const Services = () => {
  return (
    <div className='font-dmsans'>
      <h1 className='text-customTealBlue text-[36px] mb-[20px] font-bold text-center'>Services we provide</h1>
      <p className='leading-[1.7rem] text-[16px] text-[#555555] text-center mx-auto w-[40%] mb-[60px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </p>

      <div className="services-container flex justify-between gap-6 flex-wrap">
        <ServiceType image={"/src/assets/images/services-dental.jpg"} title={"Dental treatments"}/>

        <ServiceType image={"/src/assets/images/services-bones.jpg"} title={"Bone treatments"}/>

        <ServiceType image={"/src/assets/images/servicesdiagnosis.jpg"} title={"Diagnosis"}/>

        <ServiceType image={"/src/assets/images/services-cardiology.jpg"} title={"Cardiology"}/>

        <ServiceType image={"/src/assets/images/services-surgery.jpg"} title={"Surgery"}/>

        <ServiceType image={"/src/assets/images/services-eye-care.jpg"} title={"Eye care"}/>
      </div>
    </div>
  )
}

export default Services
