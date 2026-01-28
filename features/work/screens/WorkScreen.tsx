"use client"
import { useRef, useState, useEffect } from 'react'
import { WorkDetail } from '../components/WorkDetail'
import { works } from '../work.contants'
import PageTransition from '@/shared/components/PageTransition'

export const WorkScreen = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showTop, setShowTop] = useState(false)
  const [showBottom, setShowBottom] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      setShowTop(el.scrollTop > 0)
      setShowBottom(el.scrollTop + el.clientHeight < el.scrollHeight)
    }

    handleScroll()
    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <PageTransition className="h-full flex items-center">
      <div className="relative h-[60%] sm:h-[75%] w-full sm:w-1/2">
        <div
          ref={scrollRef}
          className={`h-full overflow-scroll flex flex-col gap-10 scrollbar-none ${
            showTop && showBottom
              ? ' mask-fade-vertical'
              : !showTop && showBottom
              ? ' mask-fade-bottom'
              : showTop && !showBottom
              ? ' mask-fade-top'
              : ''
          }`}
        >
          {works.map(work => (
            <WorkDetail key={work.id} {...work} />
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
