import Image from 'next/image'
import RightArrow from '@/icons/icon-right-arrow.svg'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import CategoryButton from './CategoryButton'
import { TCategory } from '@/lib/types'

interface CategoryPreviewProps {
  category: TCategory
}

const CategoryPreview = ({ category }: CategoryPreviewProps) => {
  return (
    <div
      key={category.id}
      id={category.id}
      className='flex flex-col items-center justify-center relative z-0'
    >
      <div className='absolute inset-0 w-full h-full bg-slate-950/50 rounded-2xl' />
      <div className='z-50'>
        <h2 className='h2 text-white z-50'>
          {category.category.toUpperCase()}
        </h2>
        <CategoryButton href={category.href} />
      </div>
    </div>
  )
}

export default CategoryPreview
