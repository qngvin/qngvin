import React from 'react'
import { headerItems } from './Header.constants'
import ActiveLink from '@/shared/components/ActiveLink'

export const Header = () => {
  return (
    <div className='flex justify-between absolute z-50 top-0 right-0 p-10'>
      <p className='text-2xl font-bold'>qngvin</p>
      <div className='flex flex-col items-end relative'>
        {headerItems.map((item) => (
          <ActiveLink key={item.id}
            href={item.link}
            className='group h-7 leading-7 text-sm font-bold uppercase text-white hover:text-grayMax transition-colors duration-500 ease-in-out relative'
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
