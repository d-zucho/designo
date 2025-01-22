import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
// import ThisImg from '/assets/shared/desktop/bg-pattern-call-to-action.svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeCTA = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className='bg-peach p-[72px] rounded-2xl flex flex-col lg:flex-row lg:justify-between items-center gap-8 bg-homeCTACircles bg-no-repeat bg-right bg-[length:875px_585px]'>
          {/* <Image
            src={'/assets/shared/desktop/bg-pattern-call-to-action.svg'}
            width={100}
            height={100}
            alt=''
          /> */}
          <div className='text-white text-center lg:text-left space-y-5 max-w-sm'>
            <h2 className='h2'>
              Let's talk about <br /> your projects
            </h2>
            <p className='lg:text-lg'>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <Link
            href='/'
            className={cn(
              buttonVariants(),
              'bg-white hover:bg-light-peach text-black hover:text-white tracking-[1px] px-6 py-7 text-[15px] border-none transition-all duration-300'
            )}
          >
            GET IN TOUCH
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HomeCTA
