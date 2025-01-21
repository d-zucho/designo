import AboutCategory from '@/components/AboutCategory'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { CATEGORIES } from '@/constants'
import './home.css'
import CategoryButton from '@/components/CategoryButton'

const HomeAbout = () => {
  return (
    <section className='mt-32'>
      <MaxWidthWrapper>
        {/* <div className='mt-20 border-2 border-red-500 gridContainer'>
          <div id='webDesign' className='border-2 py-10'>
            One
          </div>
          <div id='appDesign' className='border-2 py-10'>
            Two
          </div>
          <div id='graphicDesign' className='border-2 py-10'>
            Three
          </div>
        </div> */}
        <div className='gridContainer'>
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className='flex flex-col items-center justify-center relative z-0'
            >
              <div className='absolute inset-0 w-full h-full bg-slate-950/50' />
              <div className='z-50'>
                <h2 className='h2 text-white z-50'>
                  {category.category.toUpperCase()}
                </h2>
                <CategoryButton />
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HomeAbout
