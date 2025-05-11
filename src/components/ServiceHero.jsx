import React from 'react'

const ServiceHero = () => {
  return (
      <div className="relative px-[130px] mb-[150px] py-10 bg-[url('/images/service-hero.jpg')] bg-cover bg-center min-h-screen grid ">
          
          <div className="absolute top-0 inset-0 bg-black/50 z-0"></div>

          
          <div className="relative z-10 container mx-auto flex flex-col md:flex-row justify-around items-center h-full">
            
            <div className="hero-text text-white max-w-xl">
              <h1 className="mb-9 font-montserrat font-[900] text-[54px] leading-[80px]">
                Meet the Best Hospital
              </h1>
              <p className="font-montserrat font-[500] text-[18px] leading-[30px] mb-9">
              Experience world-class medical care with compassion, precision, and the latest technology — where your health is our highest priority. 
              </p>

              <div className="flex gap-4">
              <button className="px-6 py-3 bg-customTealBlue font-montserrat font-bold text-white rounded-full transition-colors duration-300 hover:bg-transparent hover:border border-customTealBlue">
                  Get Quote Now
                </button>
                <button className="px-6 py-3 bg-transparent border border-customTealBlue text-white font-montserrat font-bold rounded-full hover:bg-customTealBlue hover:text-white transition">
                  Learn More
                </button>
              </div>
            </div>

            
            <div className="book-appointment basis-[28%] bg-white p-10 rounded-[10px] shadow-lg mt-10 md:mt-0">
              <form>
                
                <h2 className="text-xl font-semibold mb-4 text-[#252B42] text-center">Book Appointment</h2>
                <label>
                  Name<span>*</span>
                  <input
                  type="text"
                  placeholder="Full Name*"
                  className="w-full p-3 mb-4 border-none outline-none rounded"
                  required
                />
                </label>

                <label>
                  Email address<span>*</span>
                  <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full p-3 mb-4 border-none outline-none rounded"
                />
                </label>

                <label className = "block mb-2" >
                  Department <span>*</span>
                </label>
                <select name="department" id="department" required className="mb-8 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 bg-white text-[#555555]">
                    <option value="">Please select</option>
                    <option value="">Dentistry</option>
                    <option value="">Orthopedics </option>
                    <option value="">Optical</option>
                    <option value="">Surgery</option>
                    <option value="">Cardiology</option>
                    <option value="">Pharmacy</option>
                    <option value="">Oncology</option>
                    <option value="">Pediatrics</option>
                  </select>

                  <select id="appointmentTime" name="appointmentTime" className="mb-8 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 bg-white text-[#555555]"required>
                    <option value="">-- Choose a Time --</option>
                    <option value="9:00">9:00 AM <span className = "px-5">Available</span></option>
                    <option value="10:30">10:30 AM <span className = "px-5">Available</span></option>
                    <option value="12:00">12:00 PM <span className = "px-5">Available</span></option>
                    <option value="13:30">1:30 PM <span className = "px-5">Available</span></option>
                    <option value="15:00">3:00 PM <span className = "px-5">Available</span></option>
                    <option value="16:30">4:30 PM <span className = "px-5">Available</span></option>
                  </select>
                
                <button
                  type="submit"
                  className="w-full bg-customTealBlue text-white py-3 rounded hover:bg-opacity-90 transition"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
      </div>
  )
}

export default ServiceHero
