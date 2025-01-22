import CategoryHero from '@/components/CategoryHero'
import { CATEGORIES } from '@/constants'
import HomeCTA from '@/sections/HomeCTA'
import React from 'react'

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>
}) => {
  const categoryId = (await params).categoryId
  const category = await CATEGORIES.find(
    (category) => category.id === categoryId
  )

  return (
    <div>
      {/* <CategoryHero /> */}
      {/* projects */}
      {/* <h1>{categoryId}</h1> */}
      <CategoryHero id={categoryId} />
      {/* <h1 className='h1'>{category?.category}</h1> */}

      {/* category links */}
      <HomeCTA />
    </div>
  )
}

export default CategoryPage
