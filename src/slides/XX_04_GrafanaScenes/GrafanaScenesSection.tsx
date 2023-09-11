import { FlexBox, Heading, Slide } from 'spectacle'
import Back from '../../assets/images/back.png'

export function GrafanaScenesSection() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Heading textAlign="start">Bonus: Creación de paneles de Grafana con Scenes</Heading>
      </FlexBox>
    </Slide>
  )
}
