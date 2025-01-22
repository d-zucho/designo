import AboutCategory from '@/components/CategoryPreview'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { CATEGORIES } from '@/constants'
import './home.css'
import CategoryButton from '@/components/CategoryButton'
import CategoryPreview from '@/components/CategoryPreview'

const HomeCategories = () => {
  return (
    <section className='mt-40'>
      <MaxWidthWrapper>
        <div className='gridContainer'>
          {CATEGORIES.map((category) => (
            <CategoryPreview key={category.id} category={category} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HomeCategories
