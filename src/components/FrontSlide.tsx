import { Slide } from 'spectacle'
import Front from '../assets/images/front.png'
import { ReactNode } from 'react'

export function FrontSlide({ children }: { children: ReactNode }) {
  return <Slide backgroundImage={`url(${Front})`}>{children}</Slide>
}
