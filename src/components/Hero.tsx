import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

const Hero = () => {
  return (
    <section className='w-full'>
      <MaxWidthWrapper className=''>
        <div className='bg-peach'>
          <div className='text-white'>
            <h1 className='h1'>
              Award-winnding custom <br />
              designs and digital <br />
              branding solutions
            </h1>
            <p>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
          </div>
          <div></div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
