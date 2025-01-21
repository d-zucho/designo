import Image from 'next/image'
import React from 'react'

interface HomeFeatureProps {
  feature: string
  description: string
  image: string
}

const HomeFeature = ({ feature, description, image }: HomeFeatureProps) => {
  return (
    <div className='flex flex-col gap-8 max-w-xs md:max-w-full md:flex-row mx-auto items-center text-center lg:flex-col lg:text-center'>
      <Image src={image} alt={feature} width={200} height={200} />
      <div className='mt-12 md:mt-0 md:flex md:flex-col md:justify-center md:text-left lg:text-center '>
        <h3 className='h3'>{feature}</h3>
        <p className='mt-8'>{description}</p>
      </div>
    </div>
  )
}

export default HomeFeature
