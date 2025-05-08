import React from 'react'
import ContactBanner from '../components/contact/ContactBanner'
import ContactFormSection from '../components/contact/ContactFormSection'
import NewsLetter from '../components/contact/NewsLetter'

const Contact = () => {
  return (
    <div className=''>
      <ContactBanner />
      <ContactFormSection />
      <NewsLetter />
    </div>
  )
}

export default Contact
