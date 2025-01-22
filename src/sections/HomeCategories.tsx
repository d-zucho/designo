import AboutCategory from '@/components/AboutCategory'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { CATEGORIES } from '@/constants'
import './home.css'
import CategoryButton from '@/components/CategoryButton'

const HomeCategories = () => {
  return (
    <section className='mt-40'>
      <MaxWidthWrapper>
        <div className='gridContainer'>
          {CATEGORIES.map((category) => (
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
                <CategoryButton />
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HomeCategories
