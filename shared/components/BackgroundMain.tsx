import { DottedGlowBackground } from "@/components/ui/dotted-glow-background"

export const BackgroundMain = ({
  color = '#bdbaba17',
  darkColor = '#262626',
}: {
  color?: string
  darkColor?: string
}) => {
  return (
    <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-70 dark:opacity-100"
        opacity={1}
        gap={12}
        radius={1.6}
        colorLightVar="--color-white"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.8}
        speedScale={1.6}
      />
  )
}
