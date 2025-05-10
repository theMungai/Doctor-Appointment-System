import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/landing/Hero'
import Services from '../components/landing/Services'
import TeamMembers from '../components/landing/TeamMembers'
import Testimonials from '../components/landing/Testimonials'

const LandingPage = () => {
  return (
    <div>
      <Layout>
        <Hero/>
        <Services/>
        <TeamMembers/>
        <Testimonials/>
      </Layout>
      
    </div>
  )
}

export default LandingPage
