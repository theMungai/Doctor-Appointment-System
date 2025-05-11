import React from 'react'
import Layout from '../components/Layout'
import ServiceHero from '../components/ServiceHero'
import FindDoctor from '../components/common/FindDoctor'
import Services from '../components/landing/Services'
import FAQ from '../components/FAQ'
import CustomerFeedBacks from '../components/CustomerFeedBack'
import SubscribeNewsLetter from '../components/common/SubscribeNewsLetter'

const ServicesPage = () => {
  return (
    <div>
      <Layout>
        <ServiceHero />
        <FindDoctor />
        <Services />
        <CustomerFeedBacks />
        <FAQ />
        <SubscribeNewsLetter />
      </Layout>
    </div>
  )
}

export default ServicesPage
