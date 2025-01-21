import HomeFeature from '@/components/HomeFeature'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { FEATURES } from '@/constants'

const HomeFeaturesSection = () => {
  return (
    <section className='my-32 border-red-200 py-20'>
      <MaxWidthWrapper>
        <div className='grid grid-cols-1 gap-16 lg:grid-cols-3'>
          {FEATURES.map((feature) => (
            <HomeFeature
              key={feature.feature}
              feature={feature.feature}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HomeFeaturesSection
