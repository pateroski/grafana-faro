import { FlexBox, Heading, Image, Notes, Slide } from 'spectacle'
import Back from '../../assets/images/back.png'
import GrafanaLovesReact from '../../assets/images/GrafanaLovesReact.png'

export function WhyReact() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading fontSize="48px">¿Por qué React?</Heading>
        <FlexBox
          width="100%"
          height="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image width="70rem" src={GrafanaLovesReact}></Image>
        </FlexBox>
      </FlexBox>
      <Notes>
        <li>
          En 2018 el equipo de Grafana se cuestionó si migraban de Angular 1 a la versión 2 o
          considerar otras librerías de frontend. Se decidieron cambiar a React ya que el esfuerzo
          era comparable a la migración de Angular. El cambio les ha proporcionado 3 cosas
          fundamentales:
        </li>
      </Notes>
    </Slide>
  )
}
