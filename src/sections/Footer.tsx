import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/logo-light.png'
import { Separator } from '@/components/ui/separator'
import { NAV_LINKS, SOCIAL_ICONS } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-black w-full py-20 text-white text-center pt-60'>
      <MaxWidthWrapper>
        <div>
          <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div>
              <Image
                src={Logo}
                alt='Designo Logo'
                width={200}
                height={30}
                className='mx-auto'
              />
            </div>
            {/* nav links */}
            <div className='flex flex-col lg:flex-row gap-8 mt-10'>
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  className='hover:text-peach  transition-all duration-300'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Separator className='my-10 opacity-10' />

          {/*  footer bottom */}
          <div className='flex flex-col lg:flex-row justify-between items-center'>
            {/* Details */}
            <div className='flex flex-col lg:flex-row  my-10 gap-10 lg:w-full lg:justify-between'>
              <div className='flex flex-col gap-1'>
                <span className='font-bold'>Designo Central Office</span>
                <span>3886 Wellington Street</span>
                <span>Toronto, Ontario M9C 3J5</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-bold'>Contact Us (Central Office)</span>
                <span>P : +1 253-863-8967</span>
                <span>M : contact@designo.co</span>
              </div>
              {/* Social Icons */}
              <div className='flex gap-4 justify-center items-center'>
                {SOCIAL_ICONS.map((icon) => (
                  <Image key={icon.alt} src={icon.icon} alt={icon.alt} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
