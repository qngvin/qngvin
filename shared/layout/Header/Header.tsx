import React from 'react'
import { headerItems } from './Header.constants'
import ActiveLink from '@/shared/components/ActiveLink'

export const Header = () => {
  return (
    <div className='flex flex-col text-white absolute z-50 top-0 right-0 p-10'>
      <p className='text-3xl font-extralight'>tran quang vinh.</p>
      <div className='flex flex-col items-end relative'>
        {headerItems.map((item) => (
          <ActiveLink key={item.id}
            href={item.link}
            className='group h-7 leading-7 text-xs font-bold text-white hover:text-grayMax transition-colors duration-500 ease-in-out relative'
            activeClassName='text-white after:scale-x-100 leading-7'
            exact
          >
            {item.label}
          </ActiveLink>
        ))}
      </div>
    </div>
  )
}
