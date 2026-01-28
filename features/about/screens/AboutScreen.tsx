import PageTransition from '@/shared/components/PageTransition'

export const AboutScreen = () => {
  return (
    <PageTransition className="h-full w-full sm:w-2/3 xl:w-1/3 flex flex-col justify-center tracking-tight font-montserrat">  
      <p className='text-white font-semibold text-sm mb-4'>About</p>
      <p className='text-white font-normal text-sm mb-5'>Software engineering @ <span className='italic'>FPT University</span></p>
      <p className='text-white font-normal text-sm mb-5'>
        My strength lies in Frontend Web Development. Currently, I am focusing on improving my Backend skills to grow into a Full-stack Web Developer, including working with server-side logic, databases, and API systems.
      </p>
      <p className='text-white font-normal text-sm'>Current stack:</p>
      <p className='text-white font-normal text-sm'>
       React, Next.js, Vue.js for frontend
      </p>
      <p className='text-white font-normal text-sm'>
        Node.js, NextJS for backend
      </p>
      <p className='text-white font-normal text-sm mb-8'>
        PostgreSQL, MongoDB for database
      </p>
      <p className='text-gray-400 italic font-normal text-sm'>(Last updated February 2026)</p>
    </PageTransition>
  )
}
