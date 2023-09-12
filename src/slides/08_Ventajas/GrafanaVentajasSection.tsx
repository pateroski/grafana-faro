import { FlexBox, Heading, Slide } from 'spectacle'
import Back from '../../assets/images/back.png'

export function GrafanaVentajasSection() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Heading textAlign="start" fontSize="64px">
          ¿Qué ventajas ofrece Grafana Faro que no ofrezca otros RUMS?
        </Heading>
      </FlexBox>
    </Slide>
  )
}
