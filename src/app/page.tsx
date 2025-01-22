import Hero from '@/components/Hero'
import HomeCategories from '@/sections/HomeCategories'
import HomeCTA from '@/sections/HomeCTA'
import HomeFeaturesSection from '@/sections/HomeFeaturesSection'

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeCategories />
      <HomeFeaturesSection />
      {/* <HomeCTA /> */}
    </div>
  )
}
