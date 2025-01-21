import AboutCategory from '@/components/AboutCategory'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { CATEGORIES } from '@/constants'
import React from 'react'

const HomeAbout = () => {
  return (
    <section className='mt-32'>
      <MaxWidthWrapper>
        <div className='text-white gap-20 flex flex-col'>
          {CATEGORIES.map((category, i) => (
            <AboutCategory key={i} category={category.category} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HomeAbout
