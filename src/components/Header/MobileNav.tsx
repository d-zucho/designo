import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { Menu } from 'lucide-react'

const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild className='cursor-pointer'>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title here</SheetTitle>
            <SheetDescription>Description here</SheetDescription>
          </SheetHeader>
          <div>
            <p>then links would go here</p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default MobileNav
