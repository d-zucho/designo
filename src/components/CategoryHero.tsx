import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { TCategory } from '@/lib/types'
import { CATEGORIES } from '@/constants'
import Image from 'next/image'
import Bg from '@/assets/web-design/desktop/bg-pattern-intro-web.svg'

interface CategoryHeroProps {
  // category: TCategory
  id: string
}

const CategoryHero = ({ id }: CategoryHeroProps) => {
  const category = CATEGORIES.find((category) => category.id === id)

  return (
    <section>
      <MaxWidthWrapper>
        {/* content container */}
        <div className='bg-peach text-center text-white p-20 rounded-2xl relative'>
          <div className='absolute inset-0 bg-homeCTACircles bg-no-repeat bg-right bg-[length:875px_585px] lg:bg-[length:1200px_625px] opacity-50' />
          <h1 className='h1 mb-6'>{category?.category}</h1>

          <p className='max-w-sm mx-auto leading-[26px]'>
            {category?.heroText}
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default CategoryHero
