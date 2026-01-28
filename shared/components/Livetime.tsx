'use client'
import { useEffect, useState } from 'react'

export default function Livetime() {
  const [time, setTime] = useState('')
  const [ampm, setAmpm] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const vnTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Ho_Chi_Minh',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      })
      const [main, ampm] = vnTime.split(' ')
      setTime(main)
      setAmpm(ampm)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      Local Time {time} <span className='lowercase'>{ampm}</span>, DN
    </div>
  )
}
