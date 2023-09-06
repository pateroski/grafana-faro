import { FlexBox, Heading, Slide } from 'spectacle'
import Back from '../../assets/images/back.png'
export function WhatIsAndWhyUseGF() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Heading fontSize="64px">¿Qué es y por qué usar Grafana Faro?</Heading>
      </FlexBox>
    </Slide>
  )
}
