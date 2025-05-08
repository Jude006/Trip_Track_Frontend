import React from 'react'
import AboutLandingPage from '../components/about/AboutLandingPage'
import OurStorySection from '../components/about/OurStorySection'
import ProblemSolutionSection from '../components/about/ProblemSolutionSection'
import TeamSection from '../components/about/TeamSection'
import DifferentiatorSection from '../components/about/DifferentiatorSection'
import CallToAction from '../components/home/CallToAction'

const About = () => {
  return (
    <div>
      <AboutLandingPage />
      <OurStorySection />
      <ProblemSolutionSection />
      <TeamSection />
      <DifferentiatorSection />
      <CallToAction />
    </div>
  )
}

export default About