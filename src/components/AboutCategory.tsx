import Image from 'next/image'
import RightArrow from '@/icons/icon-right-arrow.svg'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'

interface AboutCategoryProps {
  category: string
  id: string
}

const AboutCategory = ({ category, id }: AboutCategoryProps) => {
  let bgImage = ''
  switch (category) {
    case 'Web Design':
      bgImage =
        'bg-webMobile md:webTablet lg:bg-webDesktop bg-center bg-cover bg-no-repeat'
      break
    case 'App Design':
      bgImage =
        'bg-appMobile md:appTablet lg:bg-appDesktop bg-cente r bg-cover bg-no-repeat'
      break
    case 'Graphic Design':
      bgImage =
        'bg-graphicMobile md:graphicTablet lg:bg-graphicDesktop bg-center bg-cover bg-no-repeat'
      break

    default:
      bgImage = 'bg-black bg-center bg-cover bg-no-repeat'
      break
  }

  return (
    <div id={id}>
      {/* <div className='h-[200px] w-full bg-black text-white flex flex-col items-center justify-center'> */}
      <h2 className='h2'>{category.toUpperCase()}</h2>
      <Link
        href='/'
        className={cn(buttonVariants({ variant: 'link' }), 'flex gap-3')}
      >
        <h2 className='h2 text-white'>App Design</h2>
        <span className='text-[15px] tracking-[5px] font-medium text-white z-50'>
          VIEW PROJECT
        </span>

        <Image src={RightArrow} alt='Arrow Right' />
      </Link>
    </div>
  )
}

export default AboutCategory
