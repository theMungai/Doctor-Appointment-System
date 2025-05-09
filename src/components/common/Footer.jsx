import React from 'react'
import logo from '../../assets/images/logo.png'

function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">
      <h3 className='text-[20px] font-bold mb-10'>{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index} className='my-[18px]'>
            <a href="#" className='text-[18px]'>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Footer = () => {
  const productLinks = ['Features', 'Pricing', 'Case studies', 'Reviews', 'Updates'];
  const companyLinks = ['About', 'Contact us', 'Careers', 'Culture', 'Blog'];
  const supportLinks = ['Getting started', 'Help center', 'Server status', 'Report a bug', 'Chat support'];
  const socialLinks = ['Facebook', 'Twitter', 'Instagram', 'LinkeIn', 'Youtube'];

  return (
    <footer className='absolute bottom-0 w-full bg-customTealBlue mt-[60px] p-[100px] flex gap-x-[200px]'>
      <div className="copyrights">
        <a href='' className="company-logo flex items-center mb-4 ">
          <img src={logo} alt="Company logo" className='w-[100px]' />
          <h1 className='text-white text-[26px] font-bold font-lexend'>Healthcare</h1>
        </a>
        <p className='text-white font-dmsans'>Copyright &#169; 2022</p>
        <p className='text-white font-dmsans'>All Rights Reserved</p>
      </div>

      <div className="footer-links font-dmsans text-white flex items-center gap-x-[100px]">
        <FooterColumn title="Product" links={productLinks} />
        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Support" links={supportLinks} />
        <FooterColumn title="Follow us" links={socialLinks} />
      </div>
    </footer>
  )
}

export default Footer
