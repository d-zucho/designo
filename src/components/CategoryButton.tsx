import { cn } from '@/lib/utils'
import Link from 'next/link'
import RightArrow from '@/icons/icon-right-arrow.svg'
import { buttonVariants } from './ui/button'
import Image from 'next/image'

interface CategoryButtonProps {
  href: string
}

const CategoryButton = ({ href }: CategoryButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants(),
        'flex gap-3 bg-trtansparent hover:bg-transparent'
      )}
    >
      <span className='text-[15px] tracking-[5px] font-medium text-white'>
        VIEW PROJECT
      </span>
      <Image src={RightArrow} alt='Arrow Right' />
    </Link>
  )
}

export default CategoryButton
