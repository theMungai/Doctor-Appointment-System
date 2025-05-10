import React from 'react'
import Layout from '../components/Layout'
import ServiceHero from '../components/ServiceHero'
import FindDoctor from '../components/common/FindDoctor'
import Services from '../components/landing/Services'

const ServicesPage = () => {
  return (
    <div>
      <Layout>
        <ServiceHero/>
        <FindDoctor/>
        <Services/>
      </Layout>
    </div>
  )
}

export default ServicesPage
