import React from 'react';
import Inputs from "../common/Inputs.jsx";
import country from 'country-list-js';


const Select = ({ label, options = [], className = '', ...props }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && <label className="mb-2.5 text-[#282938] font-normal text-[19px] block ">{label}</label>}
            <select
                className="p-4 text-[1rem] text-[#282938] border border-customTealBlue outline-none rounded-[6px] w-full"
                {...props}
            >
                <option value="">-- Select {label} --</option>
                {options.map((option, idx) =>
                    typeof option === 'string' ? (
                        <option key={idx} value={option.toLowerCase()}>
                            {option}
                        </option>
                    ) : (
                        <option key={idx} value={option.value}>
                            {option.label}
                        </option>
                    )
                )}
            </select>
        </div>
    );
};

const countryList = country.names()

const Form = () => {
    return (
        <div className="basis-[100%] overflow-y-scroll py-12 ">
            <h1 className="text-[40px] text-center my-6 font-extrabold text-customTealBlue">Create Your Account</h1>
            <form>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2 ">Register as</h2>
                    <span className=" text-gray-500 italic">(Account type)</span>
                    <div className="flex gap-4 mt-4">
                        <label><input type="radio" name="userType" value="doctor" /> Doctor</label>
                        <label><input type="radio" name="userType" value="patient" /> Patient</label>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <Inputs label="First Name" placeholder="Enter your first name" />
                        <Inputs label="Last Name" placeholder="Enter your last name" />
                        <Inputs label="Email" placeholder="Enter your email" type="email" />
                        <Inputs label="Phone Number" placeholder="Enter your phone number" />
                        <Select label="Gender" options={['Male', 'Female', 'Other']} />
                        <Inputs label="Date of Birth" type="date" />
                        <Inputs label="Address" placeholder="123 Main Street" />
                        <Select label="Country of Residence" options={countryList} />
                        <Select label="Marital Status" options={['Single', 'Married', 'Other']} />
                        <Inputs label="Height (cm)" type="number" />
                        <Inputs label="Weight (kg)" type="number" />
                    </div>

                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Emergency Contact Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Inputs label="First Name" placeholder="Enter contact's first name" />
                        <Inputs label="Last Name" placeholder="Enter contact's last name" />
                        <Inputs label="Relationship" placeholder="e.g., Spouse, Parent" />
                        <Inputs label="Phone Number" placeholder="Enter contact's phone number" />
                    </div>
                </div>

                <button className="bg-customTealBlue py-3 px-10 mt-8 rounded-[8px] text-white text-[18px] font-semibold cursor-pointer relative left-1/2 -translate-x-1/2"> Create account</button>
            </form>
        </div>
    );
};

export default Form;