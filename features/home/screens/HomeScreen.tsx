import PageTransition from '@/shared/components/PageTransition'
import { getAge } from '@/utils/age'

export const HomeScreen = () => {
  const birthDate = new Date('2002-06-11')
  const age = getAge(birthDate)
  return (
    <PageTransition className="h-full flex items-center">
      <p className="w-full sm:w-1/2 xl:w-[35%] 2xl:w-[28%] font-bold tracking-tight text-sm text-white">{age} y.o. born in Quang Binh, Vietnam. Developing my ideas into reality. I explore design, build products, and shape experiences. Currently based in DaNang, Vietnam</p>
    </PageTransition>
  )
}
