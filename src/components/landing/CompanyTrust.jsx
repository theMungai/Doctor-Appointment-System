import React from 'react'

function CompanyLogo({image}){
    return <img src={`/src/assets/images/brand-${image}.png`} alt={`${image} logo`} className='w-[136px] h-[40px] object-contain cursor-pointer' />
}

const CompanyTrust = () => {
  return (
    <div className='p-[130px]'>
      <h1 className='font-bold text-[32px] text-customTealBlue text-center font-dmsans mb-11'>Trusted by 10,000+ companies around the world</h1>
      <div className="companies-container flex justify-around ">
        <CompanyLogo image="google"/>
        <CompanyLogo image="facebook"/>
        <CompanyLogo image="youtube"/>
        <CompanyLogo image="pinterest"/>
        <CompanyLogo image="twitch"/>
        <CompanyLogo image="webflow"/>
      </div>
    </div>
  )
}

export default CompanyTrust
