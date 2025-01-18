import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='w-full py-16'>
      <MaxWidthWrapper className='flex justify-between items-center'>
        <Image src={'/logo-dark.png'} alt='logo' width={200} height={25} />
        <div className='flex items-center gap-8'>
          {NAV_LINKS.map((link, index) => (
            <Link key={link.label} href={link.href} className='tracking-[2px]'>
              {link.label.toUpperCase()}
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
