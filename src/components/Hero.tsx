import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='w-full'>
      <MaxWidthWrapper className='z-0'>
        <div className='bg-peach px-20 py-28 overflow-hidden relative flex justify-between flex-col lg:flex-row gap-20 rounded-lg'>
          <div className='text-white  lg:max-w-lg text-center lg:text-left'>
            <h1 className='h1'>
              Award-winnding custom <br />
              designs and digital <br />
              branding solutions
            </h1>
            <p className='leading-[26px] mb-10 max-w-sm lg:mx-0 mx-auto mt-4'>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <Link
              href='/'
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'text-dark-grey text-[15px] font-medium tracking-wider border-none hover:bg-light-peach hover:text-white p-6'
              )}
            >
              LEARN MORE
            </Link>
          </div>

          <div className='md:-mb-80'>
            <Image
              src='/phone-image3.png'
              alt=''
              width={400}
              height={550}
              className='max-w-xs w-[300px] h-[550px] mx-auto lg:mx-0'
            />
            <Image
              src={'/assets/home/desktop/bg-pattern-hero-home.svg'}
              alt='hero'
              width={650}
              height={500}
              className='absolute top-0 right-0'
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
