import RightArrow from '/assets/shared/desktop/icon-right-arrow.svg'

interface AboutCategoryProps {
  category: string
}

const AboutCategory = ({ category }: AboutCategoryProps) => {
  return (
    // <div className='w-full h-[200px] bg-appDesktop bg-center bg-cover flex items-center justify-center bg-[url]'>\

    <div className='h-[200px] w-full bg-black text-white flex flex-col items-center justify-center'>
      <h2 className='h2'>{category.toUpperCase()}</h2>
      <p className='text-[15px] tracking-[5px] font-medium'>VIEW PROJECT</p>
      <img src={RightArrow} alt='' />
    </div>
  )
}

export default AboutCategory
