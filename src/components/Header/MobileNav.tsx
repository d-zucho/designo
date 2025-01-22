import React from 'react'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'

const MobileNav = () => {
  return (
    <div id='mobile-nav'>
      <Sheet modal>
        <SheetTrigger asChild className='cursor-pointer'>
          <Menu size={32} fill='#000000' className='text-black' />
        </SheetTrigger>
        <SheetOverlay className='bg-[#000000]/60' />
        <SheetContent className='p-0 flex flex-col justify-center font-medium border-none bg-black h-fit w-full sm:w-[400px]'>
          <SheetHeader className='py-9 bg-white'>
            <SheetTitle>
              <Image
                src={'/logo-dark.png'}
                alt='logo'
                width={200}
                height={25}
                className='mx-auto'
              />
            </SheetTitle>
            <VisuallyHidden.Root>
              <SheetDescription>Description here</SheetDescription>
            </VisuallyHidden.Root>
          </SheetHeader>
          <div className='py-12 bg-black'>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className='block py-4 text-center text-white text-2xl font-[400] hover:text-peach transition duration-300'
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
