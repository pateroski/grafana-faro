import { ReactNode } from 'react'
import { Slide } from 'spectacle'
import Back from '../assets/images/back.png'

export function NormalSlide({ children }: { children: ReactNode }) {
  return <Slide backgroundImage={`url(${Back})`}>{children}</Slide>
}
