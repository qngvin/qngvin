import PageTransition from '@/shared/components/PageTransition'
export const HomeScreen = () => {

  return (
    <PageTransition className="h-full flex items-end">
      <p className="font-semibold tracking-tight text-xs leading-4.5 text-white">
        <span className='block'>Born in 2002</span>
        <span className='block'>in Quang Binh, Vietnam.</span>
        <span className='block'>Developing my ideas</span>
        <span className='block'>into reality.</span>
        <span className='block'>I explore design,</span>
        <span className='block'>build products,</span>
        <span className='block'>and shape experiences.</span>
        <span className='block'>I work at</span>
        <span className='block'>the intersection of</span>
        <span className='block'>design and development</span>
        <span className='block'>to create</span>
        <span className='block'>clear and effective</span>
        <span className='block'>web experiences.</span>
      </p>
    </PageTransition>
  )
}
