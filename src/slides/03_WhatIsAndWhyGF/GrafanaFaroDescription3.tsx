import { FlexBox, Heading, Image, Notes, Slide } from 'spectacle'
import TheOpenAndComposableObservabilityStack from '../../assets/images/TheOpenAndComposableObservabilityStack.png'
import Back from '../../assets/images/back.png'

export function GrafanaFaroDescription3() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading fontSize="48px" padding="48px 0 0">
          The Open and Composable Observability Stack
        </Heading>
        <FlexBox
          width="100%"
          height="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={TheOpenAndComposableObservabilityStack} alignSelf="center"></Image>
        </FlexBox>
      </FlexBox>
      <Notes>
        <li>
          Dentro de la estrategia de Grafana Labs, se encuentra lo que se denomina El Stack de
          Observabilidad Componible Abierto.
        </li>
        <li>Grafana Faro es una solución que se basa en parte de esta pila de observabilidad.</li>
        <li>
          De hecho a la pila compuesta por Loki, Tempo, Mimir, Grafana y Grafana Cloud se le conoce
          como pila LGTM y es precisamente en la que se basa Grafana Faro
        </li>
      </Notes>
    </Slide>
  )
}
