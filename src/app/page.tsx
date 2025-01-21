import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <p>testing this</p>
      <Hero />
      <div className='w-full bg-black text-white mt-10'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quas
          excepturi adipisci nobis, veniam dignissimos exercitationem, numquam
          laboriosam necessitatibus maxime sit. Repellendus officia omnis a
          fugit porro. Amet, repellendus ducimus.
        </p>
      </div>
    </div>
  )
}
