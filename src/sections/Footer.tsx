import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/logo-light.png'
import { Separator } from '@/components/ui/separator'
import { NAV_LINKS, SOCIAL_ICONS } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-black w-full py-20 text-white text-center'>
      <MaxWidthWrapper>
        <div>
          <div>
            <Image
              src={Logo}
              alt='Designo Logo'
              width={200}
              height={30}
              className='mx-auto'
            />
            <Separator className='my-4 opacity-10' />
          </div>

          {/* nav links */}
          <div className='flex flex-col gap-8 my-10'>
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

          {/* Details */}
          <div className='flex flex-col my-10 gap-10'>
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
          </div>

          {/* Social Icons */}
          <div className='flex gap-4 justify-center'>
            {SOCIAL_ICONS.map((icon) => (
              <Image key={icon.alt} src={icon.icon} alt={icon.alt} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
