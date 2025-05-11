import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="hero relative  mb-[150px] py-10 bg-[url('/images/service-hero.jpg')] bg-cover bg-center min-h-screen grid ">
        <div className="absolute top-0 inset-0 bg-black/50 z-0"></div>
      </div>

      <div className="container font-dmsans px-[210px]">
        <h3 className='text-[#282938] text-center font-bold mb-7 text-[20px]'>Get In Touch</h3>
        <h1 className='text-[#333333] text-[60px] font-extrabold text-center mb-8 '>Contact Us</h1>
        <p className='mb-[80px] font-normal text-[#555555] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

        <form>
            <div className='flex justify-between items-center mb-8'>
                <div className='basis-[48%]'>
                    <label>
                        <span className='mb-2.5 text-[#282938] font-normal text-[19px] block '>First name</span>
                        <input type="text"required placeholder='Enter your first name' className='p-4 text-[1rem] text-[#282938] border border-customTealBlue outline-none rounded-[6px] w-full ' />
                    </label>
                </div>

                <div className='basis-[48%]'>
                    <label>
                        <span className='mb-2.5 text-[#282938] font-normal text-[19px] block '>Last name</span>
                        <input type="text"required placeholder='Enter your last name' className='p-4 text-[1rem] text-[#282938] border border-customTealBlue outline-none rounded-[6px] w-full ' />
                    </label>
                </div>
            </div>

            <div className='flex justify-between items-center mb-8'>
                <div className='basis-[48%]'>
                    <label>
                        <span className='mb-2.5 text-[#282938] font-normal text-[19px] block '>Email</span>
                        <input type="text"required placeholder='Enter your your email' className='p-4 text-[1rem] text-[#282938] border border-customTealBlue outline-none rounded-[6px] w-full ' />
                    </label>
                </div>

                <div className='basis-[48%]'>
                    <label>
                        <span className='mb-2.5 text-[#282938] font-normal text-[19px] block '>Phone number</span>
                        <input type="number"required placeholder='Enter your phone number' className='p-4 text-[1rem] text-[#282938] border border-customTealBlue outline-none rounded-[6px] w-full ' />
                    </label>
                </div>
            </div>

            <label>
                <span className='mb-2.5 text-[#282938] font-normal text-[19px] block '>Choose a topic</span>
                <select  name="choose-a-topic"  id="choose-a-topic"  required  className='mb-8 p-4 text-[1rem] text-[#282938] border border-customTealBlue outline-none rounded-[6px] w-full bg-white'>
                    <option value="" disabled selected>Select a topic</option>
                    <option value="appointments">Appointments & Scheduling</option>
                    <option value="billing">Billing & Insurance Inquiries</option>
                    <option value="medical-records">Medical Records Request</option>
                    <option value="medical-records">COVID-19 Information & Testing</option>
                    <option value="medical-records">Lab Results or Reports</option>
                    <option value="feedback">Feedback & Complaints</option>
                    <option value="prescriptions">Prescription Refills</option>
                    <option value="doctor-info">Doctor or Department Information</option>
                    <option value="emergency">Emergency Assistance</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="general">General Inquiries</option>
                </select>   
            </label>

            <label>
                <span className='mb-2.5 text-[#282938] font-normal text-[19px] block '>Phone number</span>
                <textarea name="message" id="message" required placeholder='Type your nessage' className='min-h-[200px] mb-8 p-4 text-[1rem] text-[#282938] border border-customTealBlue outline-none rounded-[6px] w-full ' ></textarea>
            </label>
            <label className='flex items-center gap-x-4 mb-8'>
                <input  type="checkbox"  name="accept-terms"  id="accept-terms"  className="w-5 h-5 rounded-[4px] border border-customTealBlue  checked:bg-customTealBlue accent-customTealBlue checked:border-customTealBlue focus:outline-none"/>
                <span>I accept the terms</span>
            </label>
            <button className='py-5 mb-[150px] px-[150px] bg-customTealBlue rounded-[8px] font-[500] font-dmsans text-[19px] text-white relative transform -translate-x-1/2 left-1/2'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
