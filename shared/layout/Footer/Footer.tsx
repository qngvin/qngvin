import Livetime from '@/shared/components/Livetime'


const Footer = () => {
  return (
    <div className='p-8 text-[13px] absolute bottom-0 right-0 tracking-tighter font-light text-gray-400 flex flex-col items-end justify-end'>
        <div className='flex items-center gap-[0.2rem]'>
          <p className='pt-0.75'>©</p>
          <p>qngvin</p>
        </div>
        <Livetime />
    </div>
  )
}

export default Footer