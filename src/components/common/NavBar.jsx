// NavBar.jsx
import React from 'react';
import logo from '../../assets/images/logo.png';

function NavBar() {

    const navItems = [
        {label: "Home"},
        {label: "Service"},
        {label: "Contact Us"},
        {label: "Help"},
        {label: "Blogs"},
    ]

    const navItem = navItems.map((item) => {
        return <li className='mr-6' >
        <a href="" className="relative text-black text-[20px] focus:text-customTealBlue focus:outline-noneafter:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[3px] after:rounded-[7px] after:w-0 after:bg-customTealBlue focus:after:w-full after:transition-all after:duration-300
      ">{item.label}</a>
      </li>
        
    })

  return (
    <nav className="flex items-center justify-between font-lexend py-5 px-20">
            <a href="#" className="text-customTealBlue text-[26px] font-bold logo flex items-center">
                <img src={logo} alt="Logo" className="w-[60px] " />
                Health<span className="text-customGreen">care</span>
            </a>
        

        <ul className='flex items-center'>
            {navItem}
        </ul>

        <div className="sign-up-login flex items-center gap-x-7">
            <button className='bg-transparent text-customTealBlue text-[20px] font-lexend font-semibold cursor-pointer'>Sign Up</button>

            <button className='bg-customTealBlue py-3 px-10 rounded-[8px] text-white text-[20px] font-lexend font-semibold cursor-pointer'>Log In</button>

        </div>
      
    </nav>
  );
}

export default NavBar;